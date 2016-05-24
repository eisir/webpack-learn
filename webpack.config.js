var path = require('path');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, "./node_modules/react-dom/dist/react-dom.js");

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
    	publicPath: "/static/",
    	stats: { colors: true },
    	port: 3000,
    	contentBase: 'build',
    	inline: true
    },
    resolve: {
    	extensions: ["", ".js", ".jsx", ".json"],
    	alias: {
//  		'react': pathToReact,
//  		'react-dom': pathToReactDOM
    	}
    },
    devtool: 'source-map',
    externals: [],
    module:{
    	loaders: [
    		{
		      test: /\.js$/,
		      loaders: ['react-hot', 'babel'],
		      exclude: path.resolve(__dirname, 'node_modules')
		    },
		    {
		      test: /\.css/,
		      loader: 'style!css'
		    },
		    {
		      test: /\.less/,
		      loader: 'style!css!less'
		    },
		    {
			  test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
			  loader: "url?limit=10000"
			}
    	],
    	noParse: [pathToReact, pathToReactDOM]
    },
    plugins: [
    	new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
};