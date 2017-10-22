const webpack = require('webpack');
const devConfig = require('./webpack.base.config');

devConfig.entry = ["webpack-hot-middleware/client", "./index"];

devConfig.output.publicPath = '/';

devConfig.devtool = 'inline-source-map';

devConfig.plugins = [
    ...devConfig.plugins,
    new webpack.HotModuleReplacementPlugin()
];

module.exports = devConfig;
