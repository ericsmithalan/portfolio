require("babel-polyfill");
var path = require('path')
var common = require('./webpack.common')

var uglifyOptions = {
    compress: {
        warnings: false,
        screw_ie8: true
    },
    mange: {
        screw_ie8: true
    },
    output: {
        comments: false
    }
}

module.exports = {
    entry: ['./index'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: common.getResolve(),
    plugins: [
        common.getPlugin('envPlugin'),
        common.getPlugin('dedupe'),
        common.getPlugin('occurrenceOrder'),
        common.getPlugin('buildInfo'),
        common.getPlugin('uglify', uglifyOptions),
        common.getPlugin('ignoreIconv')
    ],
    postcss: common.getPostCss(),
    node: common.getNode(),
    module: {
        loaders: common.getLoaders()
    }
}