// nodejs 中的path模块

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, './src/index.js'),
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, './output/static'),
        publicPath: 'static/',
        filename: '[name].js'
    },
    devtool: "source-map", 
    module: {
        loaders: [
            
            {
                test: /\.css$/,   
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.html$/, 
                loader: 'html-loader'   
            },
            { 
              test: /\.scss$/,
              loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true
        }),
        new ExtractTextPlugin("[name].css")
    ]
}