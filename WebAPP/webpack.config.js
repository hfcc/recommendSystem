var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  {
  entry: [
	'webpack/hot/dev-server',
	'webpack-dev-server/client?http://localhost:8080',
	path.resolve(__dirname, 'app/index.js')
  ],
  output: {
    path: 'build',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [{
    	test: /\.jsx?$/, 
      	loader: 'babel-loader',
      	exclude: /node_modules/,
      	query: {
        	presets: ['es2015', 'react']
       	}
    }]
  },
  plugins: [new HtmlWebpackPlugin({
  	title: 'recommend',
  	template: 'index-template.html',
  	inject: 'body'
  })]
}