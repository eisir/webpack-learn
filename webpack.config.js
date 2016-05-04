var path = require('path');

var pathToReact = path.join(__dirname, "./node_modules/react/dist/react.js");
var pathToReactDOM = path.join(__dirname, './node_modules/react-dom/dist/react-dom.js');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
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
    	extensions: ["", ".js", ".jsx", ".css", ".json"],
    	alias: {
    		'react': pathToReact,
    		'react-dom': pathToReactDOM
    	}
    },
    module:{
    	loaders: [
    		{
    			test:/\.js$/,
    			loader: 'babel-loader'
    		}
    	],
    	noParse: [pathToReact, pathToReactDOM]
    }
};