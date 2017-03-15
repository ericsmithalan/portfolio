var common = require('./webpack.common')
var path = require('path')

var resolve = common.getResolve()
for (var k in resolve.alias) {
    if (resolve.alias.hasOwnProperty(k)) {
        resolve.alias[k] = path.join(__dirname, resolve.alias[k])
    }
}

module.exports = {
    resolve: resolve
}