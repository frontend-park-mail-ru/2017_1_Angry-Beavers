/**
 * Created by ed on 06.04.17.
 */

'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname,
        filename: './public/static/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.pug$/,
                loaders: ['pug-loader']
            },
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        })
    ]
};
