/**
 * Created by luwenwei on 17/9/13.
 */
var webpack = require('webpack');
var path = require('path');
var plugins = require("./plugins");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var QueueAnim = path.resolve(__dirname,'./node_modules/rc-queue-anim/lib/index.js')
var config = {
    //入口文件输出配置
    entry: {
        app:path.resolve(__dirname, './app/entry.js'),
        styles:plugins.css,
        jquery:path.resolve(__dirname, './node_modules/jquery/dist/jquery.min.js'),
        react:["react","react-dom","react-router","react-router-dom"],
        vendor:["moment","classnames","axios","rc-switch","react-alert",QueueAnim],
    },
    module: {
        //加载器配置
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                //include: path.join(__dirname, './app'),
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime',['import', [{ libraryName: 'antd-mobile', style: "css" }]]],
                    presets:['es2015','react','stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: [path.join(__dirname,'./app/styles')],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(css|sass|scss)$/,
                exclude:[
                    path.join(__dirname,'./node_modules/'),
                    //path.join(__dirname,'./app/styles'),
                ],
                loader : 'style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]!sass-loader?sourceMap!postcss-loader',// 一定要有style-loader
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=font/[name].[ext]'}
        ]
    },
    //postcss: [ autoprefixer({ browsers: ['last 2 versions'] })],
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'commonMethods':__dirname+'/app/utils/commonMethods.js',
        }
    },
    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        })
    ],

    node: {
        fs: 'empty'
    }
};

module.exports = config;