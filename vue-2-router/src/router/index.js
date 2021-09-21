import Vue from 'vue'
// 配置导入路由相关的信息
import Router from 'vue-router'
import Demo from '@/components/Demo'
import HelloWorld from '@/components/HelloWorld'

// 1.通过Vue.use(插件) : 安装插件(通过vue的方式安装插件)
Vue.use(Router)

// 配置路由组件映射关系
const routes = [
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

// 2.创建VueRouter路由对象
export default new Router({
  // 配置路径和组件之间的映射关系
  routes
})

// 3.将router对象传入到Vue实例