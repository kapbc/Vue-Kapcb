import Vue from 'vue'
import App from './App'
// 导入vue-router的配置
// 如果导入的是一个文件夹, 它会默认去找这个文件夹下的index.js文件
// 所以可以将./router/index.js后的index.js省略掉
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 将router对象挂载到vue实例上
  router,
  render: h => h(App)
})
