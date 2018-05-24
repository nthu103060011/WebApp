var path = require('path');
var webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    resolve: {
        alias: {
            components: path.resolve(srcPath, 'components'),
            states: path.resolve(srcPath, 'states')
        }
    },
    entry: {
        main: ['babel-polyfill', './index.jsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets: [
                            [ 'env', { modules: false } ],
                            'react'
                        ],
                        plugins: [
                            'transform-object-rest-spread'
                        ]
                    }
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 8080
    },
    mode: 'development'
};
