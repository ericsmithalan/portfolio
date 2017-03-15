var path = require('path')
var common = require('./webpack.common')

module.exports = {
    devtool: '#cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client', './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: common.getResolve(),
    plugins: [
        common.getPlugin('occurrenceOrder'),
        common.getPlugin('HMR'),
        common.getPlugin('noErrors'),
        common.getPlugin('buildInfo'),
        common.getPlugin('ignoreIconv'),
    ],
    postcss: common.getPostCss(),
    node: common.getNode(),
    module: {
        loaders: common.getLoaders()
    }
}