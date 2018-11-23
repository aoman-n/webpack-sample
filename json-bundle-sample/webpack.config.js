const path = require('path');

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
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          // url-loaderで処理する属性、リソースとして処理すべき属性を指定する
          // 形式は「タグ名:属性名」
          // <img>要素のsrc属性、すべての要素のdata-src属性をリソースとして処理をするという設定
          options: {
            attrs: ['img:src', ':data-src']
          }
        }
      },
      // 画像リソースを閭里するための設定
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: './images/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}