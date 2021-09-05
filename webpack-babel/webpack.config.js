const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '../dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'less-loader'}
        ]
      },
      {
        test: /\.(img|jpg|jpeg|png|gif)$./,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 15,
              name: 'img/[name].[hash:8].[ext]',
              esModule: false
            }
          }
        ],
        type: 'javascript/auto'
      }
    ]
  }
}