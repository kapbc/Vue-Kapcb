// 从node中动态获取文件路径
const path = require('path');

module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // 路径(动态获取文件路径)
    path: './dist',
    // 文件名
    filename: 'bundle.js',
  },
}