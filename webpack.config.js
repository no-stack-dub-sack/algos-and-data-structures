const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: ["webpack-hot-middleware/client", "./index"],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
