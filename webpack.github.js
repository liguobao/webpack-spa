let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');


module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname, './'),
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'js/index-[hash:6].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase : "./dist",
        open : true,
        port: 8081,
        inline: true,
        compress: true,
        hot: true,
        overlay: true,
        clientLogLevel: "none",
        noInfo: true
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015','stage-1']
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader?config=otherHtmlLoaderConfig"
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './img/[name]-[hash:6].[ext]',
                    publicPath: this.context
                }
            },
            {
                test: /\.(mp3|mp4|avi|flv|f4v)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './video/[name]-[hash:6].[ext]',
                    publicPath: this.context
                }
            },
            {
                test: /\.(woff2?|otf|eot|svg|ttf)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './font/[name]-[hash:6].[ext]',
                    publicPath: this.context
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!postcss-loader"
                })
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/test.html'
        }),
        new ExtractTextPlugin("css/styles.css"),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
