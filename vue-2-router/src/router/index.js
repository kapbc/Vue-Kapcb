import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/components/Demo'
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
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
