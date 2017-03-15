var fs = require('fs')
var path = require('path')

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.dev.config')

var Express = require('express')
var app = new Express()
var port = process.env.PORT || 3001

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

// app.use('/styles.css', function (req, res) {
//     res.set('Content-Type', 'text/css')
//     res.sendFile(path.join(__dirname, '/dist/styles.css'))
// })

app.use('/graphImage.png', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/graphImage.png'))
})

app.use(function (req, res) {
    fs.readFile(__dirname + '/dist/index.html', (err, indexData) => {
        if (err) 
            throw err
        res.set('Content-Type', 'text/html')
        res.send(indexData.toString())
    })
})

app.listen(port, function (error) {
    if (error) {
        console.error('error', error)
    } else {
        console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
    }
})