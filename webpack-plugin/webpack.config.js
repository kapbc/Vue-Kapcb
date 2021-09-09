const path = require('path');
// 添加版权的plugin
const webpack = require('webpack');
// 添加vue解析的plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 添加HTML打包plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 添加js压缩插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      crypto: false
    },
    extensions: ['.vue', '.ts', '.js', '.sass', '.css']
  },
  plugins: [
    // 解析vue插件
    new VueLoaderPlugin(),
    // 添加banner版权信息插件
    new webpack.BannerPlugin({
      banner: 'Author By Kpacb'
    }),
    // 生成HTML插件
    new HtmlWebpackPlugin({
      // 指定模板, 就会按照webpack.config.js所在的同级目录下的index.html, 依此为模板进行生城
      template: 'index.html'
    }),
    new UglifyJsPlugin(),
  ],
  devServer: {
    // 需要热部署的文件对象
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    contentBase: './dist',
    inline: true,
    // 是否需要实时进行监听, 实时刷新
    // hot: true,
    // 端口号
    port: 3000,
    // historyApiFallback : 在SPA页面中, 依赖HTML5的history模式
    open: true
  }
}