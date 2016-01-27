var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/home/index.js')
    ],
    output: {
        path: 'build',
        filename: 'index_bundle.js'
    },
    resolve: {
        root: [path.resolve(__dirname)],
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, loader: "style!css"
            },
            {
                test: /\.(png|jpg)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            {
              test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
              test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/font-woff"
            }, 
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=application/octet-stream"
            }, 
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: "file"
            }, 
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Recommend Your Love',
        template: 'src/html_template/index-template.html',
        inject: 'body'
    })]
}