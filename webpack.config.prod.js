const webpack = require('webpack');
const prodConfig = require('./webpack.base.config');

prodConfig.devtool = 'source-map';

module.exports = prodConfig;
