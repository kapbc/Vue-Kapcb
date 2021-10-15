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


// 前置钩子(钩子:回调)
// 前置守卫(guard)
router.beforeEach((to, from, next) => {

  console.log(to)
  // to 路由跳转的目标
  document.title = to.matched[0].meta.title
  // from 路由跳转起始点

  console.log('before each')

  // 调用父类的next方法, 不调用会无法跳转页面
  next()
})

// 如果时后置钩子, 也就是afterEach, 不需要主动调用next()函数
router.afterEach((to, from) => {
  console.log('after each')
})

// 上面使用的导航守卫, 被称之为全局守卫
// 1.路由独享的守卫
// 2.组件内的守卫