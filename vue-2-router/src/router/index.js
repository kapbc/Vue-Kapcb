import Vue from 'vue'
// 配置导入路由相关的信息
import Router from 'vue-router'
import Demo from '@/components/Demo'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'

// 1.通过Vue.use(插件) : 安装插件(通过vue的方式安装插件)
Vue.use(Router)

// 配置路由组件映射关系
const routes = [
  {
    path: '/',
    // 重定向
    redirect: '',
    component: index
  },
  {
    // 访问默认显示页面
    path: '/helloWorld',
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
  routes,
  // 浏览器路由模式, 默认是使用hash, 这里修改为HTML5的history模式
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
// 在src目录下的main.js中导入router并将其挂载到vue实例上