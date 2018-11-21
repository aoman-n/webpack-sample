const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // ExtractTextPlugin自体は、cssをモジュール化する機能を持たないので、css-loaderを設定する
        use: ExtractTextPlugin.extract({ use: 'css-loader' })
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    // 引数にスタイルシートの出力ファイル名を指定する。
    new ExtractTextPlugin('style.css'),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  }
}