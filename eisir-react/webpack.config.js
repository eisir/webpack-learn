var path = require('path');
var webpack = require('webpack');
// 编译后自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
   	entry: {
   		index:[
   			'webpack/hot/dev-server',
        	'webpack-dev-server/client?http://localhost:3000',
   			path.resolve(__dirname, './src/js/page/index.js'),
   		]
   	},
    output: {
        path: path.resolve(__dirname, '/build'),
        filename: '[name].js',
//      publicPath: "http://localhost:3000/"
    },
    devServer: {
//		publicPath: "/static/",
	  	historyApiFallback: true,
	  	hot: true,
	  	inline: true,
	  	contentBase: 'build',
	  	port: 3000,
	  	stats: { colors: true }
    },
    resolve: {
    	extensions: ["", ".js", ".jsx", ".json"]
    },
    module: {
    	noParse: [
	        path.resolve(node_modules, 'react/dist/react.min.js'),
	        path.resolve(node_modules, 'react-dom/dist/react-dom.min.js')
	    ],
        loaders: [
            { test: /\.js[x]?$/,loaders: ['react-hot','babel'],exclude: path.resolve(__dirname, 'node_modules')},
            { test: /\.css$/, loader: 'style!css'},
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.less/, loader: 'style!css!less'},
            { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192'},
            {
			  test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
			  loader: "url?limit=8192"
			}
        ]        
    },
    plugins: [
   	 	new webpack.HotModuleReplacementPlugin(),
   	 	new webpack.NoErrorsPlugin(),
//      new webpack.ProvidePlugin({
//          jQuery: "jquery",
//          $: "jquery"
//      }),
        new HtmlWebpackPlugin({
	        title: 'your app title',
	        template: './src/views/index.html'
      	}),
      	new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
      	new webpack.NoErrorsPlugin()
    ]    
};
