let HtmlWebpackPlugin = require('html-webpack-plugin');
let autoprefixer = require('autoprefixer');
let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/index-hash.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase : "./dist",
        open : true,
        port: 9000,
        inline: true,
        compress: true,
        hot: true
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader?config=otherHtmlLoaderConfig"
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: 'url-loader?limit=8192&name=/img/[name]-hash.[ext]',
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/main.html'
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};