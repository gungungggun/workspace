module.exports = {
	// エントリーポイントの設定
	entry: __dirname + '/assets/js/app.js',
	// 出力の設定
	output: {
		// 出力するファイル名
		filename: 'bundle.js',
		// 出力先のパス
		path: __dirname + '/public/js'
	},
	module: {
		rules: [

			{ //babel用の設定
				test: /\.js$/,
				exclude: /node_modules/, //node_modules以下は対象から外す
				loader: 'babel-loader'
			}
		]
	}
};
