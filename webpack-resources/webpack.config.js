const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'development', // 使用开发模式
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '../dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            // 用 url-loader 处理图片
            loader: 'url-loader', // url-loader 依赖于  file-loader 要使用url-loader必须安装file-loader
            options: {
              // name: '[name].[hash:16].[ext]',
              // 当加载图片的时候, 如果小于limit的限制时, 会将图片编译成base64字符串形式
              // 如果大于limit的限制时, 会使用file-loader模块对文件进行加载
              // 将小于30KB的图片转换成base64的格式
              limit: 1024 * 30,
              name: 'dist/[name].[hash:16].[ext]'
            }
          }
        ]
      }
    ],
  }
}