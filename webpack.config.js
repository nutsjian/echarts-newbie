let path = require('path')
let webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[chunkhash].js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '简单页面',
            filename: 'index.html',
            template: 'index.ejs'
        }),
        new HtmlWebpackPlugin({
            title: '第二个页面',
            filename: 'second.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}