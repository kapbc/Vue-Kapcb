import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 渲染
  render: h => h(App)
  // 箭头函数等价于下面的函数写法
  // render: function (h) {
  //   return h(App)
  // }
})

// runtime-only
// render -> virtual dom -> UI
// 1、性能更高
// 2、代码量更少(小6KB)
