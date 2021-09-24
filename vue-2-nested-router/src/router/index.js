import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Demo = () => import('@/components/Demo')
const HelloWorld = () => import('@/components/HelloWorld')
const DemoList = () => import('@/components/DemoList.vue')
const DemoMessage = () => import('@/components/DemoMessage')

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/demo',
    component: Demo,
    children: [
      {
        // 子组件不需要在path中添加/
        path: 'demoList',
        component: DemoList
      },
      {
        path: 'demoMessage',
        component: DemoMessage
      }
    ]
  }
]

export default new Router({
  routes,
  mode: 'history'
})
