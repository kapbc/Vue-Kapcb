import Vue from 'vue'
import Router from 'vue-router'
import Kapcb from '@/components/Kapcb'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kapcb',
      name: 'Kapcb',
      component: Kapcb
    }
  ]
})
