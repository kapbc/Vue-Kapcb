import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/components/UserList'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/user/:userId',
    name: 'UserList',
    component: UserList
  }
]

export default new Router({
  routes,
  mode: 'history'
})
