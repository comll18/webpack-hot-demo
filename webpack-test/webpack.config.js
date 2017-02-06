var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './prod/index.js'),
	output:{
		path:path.resolve(__dirname,'./build'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude:/node_modules/,
				query : {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}