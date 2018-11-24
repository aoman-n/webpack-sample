const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/src'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {},
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}