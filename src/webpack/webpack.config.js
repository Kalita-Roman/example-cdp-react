import webpack from 'webpack';
import { join } from 'path';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'webpack/hot/only-dev-server',
        join(__dirname, '../client/index.js')
    ],
    output: {
        path: join(__dirname, '../client/bundle'),
        publicPath: '/bundle',
        filename: 'bundle.js',
    },
    mode: 'none',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new StyleLintPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },
};