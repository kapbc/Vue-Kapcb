// 从node中动态获取文件路径
const path = require('path');

module.exports = {
  // 入口: 可以是字符串、数组、对象
  entry: './src/main.js',
  // 出口: 通常是一个对象, 里面至少包含两个重要的属性, path和filename
  output: {
    // 绝对路径(动态获取文件路径)
    path: path.resolve(__dirname, 'dist'),
    // 文件名
    filename: 'bundle.js',
  },
}