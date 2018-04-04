const webpack = require('webpack');
const path    = require('path');


module.exports = {
    entry: path.join(__dirname, 'public/index.jsx'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    }
};