const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const express = require('express');
const path = require('path');

const app = express();
const compiler = webpack(config);
const DIST_DIR = path.join(__dirname, 'dist');

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
    const filename = path.join(DIST_DIR, "index.html");

    compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
        return next(err);
    }

    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
    });
});

app.listen(8080, () => {
    console.log('express server is listening on port 8080');
});
