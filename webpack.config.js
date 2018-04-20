let path = require('path')
let webpack = require('webpack')
module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}