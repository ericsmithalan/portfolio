var git = require('git-rev-sync')
var path = require('path')
var webpack = require('webpack')
var __DEV__ = process.env.NODE_ENV !== 'production'
var __ENABLE_VERSIONING__ = process.env.ENABLE_VERSIONING === 'true'

const PATHS = {
    dist: path.join(__dirname, "dist"),
    app : path.join( __dirname, "src" ),
    images : path.join( __dirname, "dist/images" )
};

function getLoaders() {
    return [
        {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, '..', '..', 'src')
        }, {
            test: /react-icons\/(.)*(.js)$/,
            loaders: ['babel']
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        },
        {
            test: /\.css$/,
            loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss',
            include: PATHS.dist
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss',
        }, {
            test: /\.otf$|\.eot$|\.woff$|\.woff2$|\.svg$|\.ttf$|\.png$|\.gif$|\.jpg$|\.zip$/,
            loader: 'url-loader?limit=100000'
        },
        {
            test: /\.less$/,
            loaders: [
                'style',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'resolve-url',
                'less'
            ]
        },
    ]
}

function getNode() {
    return {net: 'empty', tls: 'empty', dns: 'empty'}
}

function getPostCss() {
    return [require('postcss-modules-values'), require('postcss-cssnext')]
}

function getBuildInfo(tagGit) {
    if (__ENABLE_VERSIONING__) {
        var info = {
            available: true,
            branch: git.branch(),
            time: + new Date(),
            log: git.log(50)
        }

        if (tagGit) {
            info.tag = git.tag()
        }

        return info
    } else {
        return {
            available: false,
            time: + new Date()
        }
    }
}

function getPlugin(plugin, options) {
    switch (plugin) {
        case 'buildInfo':
            return new webpack.DefinePlugin({
                __DEV__: JSON.stringify(__DEV__),
                __BUILD_INFO__: JSON.stringify(getBuildInfo(__DEV__))
            })
        case 'HMR':
            return new webpack.HotModuleReplacementPlugin()
        case 'noErrors':
            return new webpack.NoErrorsPlugin()
        case 'occurrenceOrder':
            return new webpack
                .optimize
                .OccurenceOrderPlugin()
            case 'dedupe':
            return new webpack
                .optimize
                .DedupePlugin()
            case 'ignoreIconv':
            return new webpack.IgnorePlugin(/\/iconv-loader$/)
        case 'envPlugin':
            return new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        case 'uglify':
            return new webpack
                .optimize
                .UglifyJsPlugin(options)
    }
}

var moduleDirs = [
    'node_modules',
    'src'
]

var aliases = {
    store: 'src/redux',
    images: path.resolve(__dirname, 'src/common/images'),
    downloads: path.resolve(__dirname, 'src/downloads'),
}

function getResolve() {
    return {
        root: path.resolve(__dirname),
        modulesDirectories: moduleDirs,
        alias: aliases,
        extensions: ['', '.json', '.js', '.jsx']
    }
}

exports.getLoaders = getLoaders
exports.getNode = getNode
exports.getPostCss = getPostCss
exports.getBuildInfo = getBuildInfo
exports.getPlugin = getPlugin
exports.getResolve = getResolve