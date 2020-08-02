const webpack = require('webpack');
const resolve = require('path').resolve;
const config = {
    entry: __dirname + '/src/index.jsx',
    output:{
        path: resolve(__dirname, 'public/static/build/js'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js','.jsx','.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules'
            }
        ]
    }
};
module.exports = config;