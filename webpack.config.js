module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './main.js',
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}`,
      // 出力ファイル名
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          // 拡張子 .js の場合
          test: /\.js$/,
          //nodemodulesを含める
          // exclude: /node_modules/,
          use: [
            {
              // Babel を利用する
              loader: 'babel-loader',
              // Babel のオプションを指定する
              options: {
                presets: [
                  // env を指定することで、ES2017 を ES5 に変換。
                  // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                  // webpack の Tree Shaking 機能が使えない
                  ['env', {'modules': false}]
                ]
              }
            }
          ]
        }
      ]
    },
    // ソースマップを有効にする
    devtool: 'source-map'
  };