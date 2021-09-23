import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/demo',
    name: 'Demo',
    // 路由懒加载, 使用时才会请求路由, 打包时会分包
    component: () => import('@/components/Demo')
  }
]

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
