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