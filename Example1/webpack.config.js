var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
    //   use: ['style-loader', 'css-loader']
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    }]
  },
  plugins: [
      new MiniCssExtractPlugin({
          filename: 'styles.css'
      })
  ]
}