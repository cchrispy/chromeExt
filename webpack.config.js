// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   title: 'Extension',
//   filename: 'index.html',
//   template: './src/index.html',
//   inject: 'body'
// })

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'content.js',
    path: __dirname + '/ext'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: __dirname + '/src',
        exclude: __dirname + '/node_modules'
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: __dirname + '/src/styles',
        exclude: __dirname + '/node_modules'
      }
    ]
  },
  // plugins: [
  //   HtmlWebpackPluginConfig
  // ]
}