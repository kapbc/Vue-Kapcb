import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.test = function (cpn) {
  console.log('这是 : ' + cpn + ' 组件, 调用Vue原型中的test方法')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
},)

console.log('main.js 中的router : ' + router)

const kapcb = {
  name: 'kapcb'
}

Object.defineProperty(kapcb, 'age', {
  get () {
    console.log('调用get方法获取age的值')
    return 18
  }
})

console.log(kapcb)
console.log(kapcb.age)

router.beforeEach((to, from, next) => {

  // to 路由跳转的目标
  document.title = to.meta.title
  // from 路由跳转起始点

  // 调用父类的next方法, 不调用会无法跳转页面
  next()
})