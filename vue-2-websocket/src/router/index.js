import Vue from 'vue'
import Router from 'vue-router'
import WebSocket from '@/components/WebSocket'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/socket',
    name: 'WebSocket',
    component: WebSocket
  }
]

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
