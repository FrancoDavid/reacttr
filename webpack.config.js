const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main:   path.resolve(__dirname, './src/index.jsx')
    },
    output: {
        path:   path.resolve(__dirname, './build'),
        filename: 'app.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test:   /(.\.js|jsx)$/,
                exclude:    /node_modules/,
                use: ['babel-loader']
            },
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/assets/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}