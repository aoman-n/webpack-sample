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
        test: /\.css$/,
        use: [ 'style-loader', {
          loader: 'css-loader',
          options: {
            url: false
          }
        }]
      },
      // {
      //   test: /\.(gif|png|jpg|jpeg)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 51200,
      //       name: './images/[name].[ext]'
      //     }
      //   }
      // }
    ]
  }
}