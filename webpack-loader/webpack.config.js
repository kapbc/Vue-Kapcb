const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // 匹配css文件, $表示结尾
      test: /\.css$/,
      // style-loader负责将样式添加到DOM中
      // css-loader负责加载css文件
      // 按道理应该先将css文件进行加载, 然后再将style样式添加到DOM中,这里之所以先配置style-loader在配置css-loader
      // 是因为webpack在使用多个loader时, 是从右向左读取配置的loader
      use: ['style-loader', 'css-loader']
    }]
  }
}

