import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const HelloWorld = () => import('@/components/HelloWorld')
const UserProfile = () => import('@/components/UserProfile')
const BuyerCenter = () => import('@/components/BuyerCenter')
const AlertMessage = () => import('@/components/AlertMessage')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [
      {
        path: 'alertMessage',
        name: 'AlertMessage',
        component: AlertMessage
      }
    ]
  },
  {
    path: '/userProfile/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/buyerCenter',
    name: 'BuyerCenter',
    component: BuyerCenter
  }
]

export default new Router({
  routes,
  mode: 'history'
})
