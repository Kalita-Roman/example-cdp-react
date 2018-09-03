const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '../client/index.js'),
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '../client/index.js')
    ],
    output: {
        path: path.join(__dirname, '../client/bundle'),
        publicPath: '/bundle',
        filename: 'bundle.js',
    },
    mode: 'none',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
        ],
    },
};