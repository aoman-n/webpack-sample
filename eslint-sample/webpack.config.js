const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              failOnError: true,
            },
          },
        ],
      },
    ],
  },
};
