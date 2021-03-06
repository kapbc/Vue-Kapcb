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
    meta: {
      title: 'Hello World'
    },
    children: [
      {
        path: 'alertMessage',
        name: 'AlertMessage',
        component: AlertMessage,
        meta: {
          title: 'Alert Message'
        }
      }
    ]
  },
  {
    path: '/userProfile/:userId',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      title: 'User Profile'
    }
  },
  {
    path: '/buyerCenter',
    name: 'BuyerCenter',
    component: BuyerCenter,
    meta: {
      title: 'Buyer Center'
    },
    beforeEnter: (to, from, next) => {
      console.log('独享路由守卫 before enter')

      // 一定要调用next方法, 否则页面跳转会无效
      next()
    },
  }
]

export default new Router({
  routes,
  mode: 'history'
})
