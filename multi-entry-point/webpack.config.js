const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  // 複数のentryファイルがある場合
  entry: {
    main: './src/main.js',
    sub: './src/sub.js'
  },
  // [name]: 元のファイル名
  // [id]: id値
  // [hash]: ビルド全体で生成されたハッシュ値
  // [chunkhash]: 個々のバンドル単位に生成されたハッシュ値
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name]-[chunkhash].js'
  },
  // 共通するファイルを切り出す
  optimization: {
    splitChunks: {
      // バンドルされた共通ライブラリに付与する名前
      name: 'commonlib',
      chunks: 'initial'
    }
  },
  // 引数には、クリーンアップ対象のパスを配列形式で指定する。
  plugins: [
    new CleanWebpackPlugin(['dist/*.js'])
  ]
}