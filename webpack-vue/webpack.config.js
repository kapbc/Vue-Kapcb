const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/js/main.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {loader: 'vue-loader'}
        ]
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less/,
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
      }
    ]
  },
  // 配置vue
  resolve: {
    // 在项目的js文件中, 只要有 import Vue from 'vue'; 的导入
    // 都会将导入的 vue 指向这里配置的问价
    alias: {
      // runtime-only中不允许有任何的template代码
      // 将vue文件指向指定的vue发布版本
      // vue/dist/vue.esm.js版本中包括了需要的runtime-compiler
      // 如果这里不进行配置指定, 他会默认去使用vue/dist/vue.runtime.js
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
}