const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/client.js',
  },
  output: {
    path: path.resolve(__dirname, '../_dist'),
    filename: 'india.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My website',
      template: './templates/client.html',
    }),
  ],
};