const path = require('path');
const webpack = require('webpack');
const HtmlWebBackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    module: {
        rules: [{
            test: '/.js$/',
            exclude: '/node_modules',
            loader: 'babel-loader',
        }, ],
    },
    plugins: [
        new HtmlWebBackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
    ],
};