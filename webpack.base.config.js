const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: [ "./index" ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "src"),
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$|\.jsx$/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'env' ],
                        plugins: [ require('babel-plugin-transform-object-rest-spread') ]
                    }
                }
            },
            {
                test: /\.ico$|\.png$/,
                include: path.resolve(__dirname, "src"),
                use: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
};
