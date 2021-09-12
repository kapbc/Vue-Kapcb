// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const demo = {
  template: `
    <div>
    <h3>{{ message }}</h3>
    <button @click="btnClick">按钮</button>
    </div>`,
  data () {
    return {
      message: '传入组件到render函数',
      clickMessage: '这是组件中的点击事件'
    }
  },
  methods: {
    btnClick () {
      alert(this.clickMessage)
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 1.普通用法:
    // 使用render函数创建DOM元素
    // 参数: createElement('标签(字符串)', {标签的属性}(对象), ['标签对中的内容'](数组))
    // return createElement(
    //   'h2',
    //   { class: 'box' },
    //   ['Hello Vue! This is render function create element! I am Kapcb!', createElement(
    //     'button',
    //     ['按钮'])])

    // 2.传入组件对象:
    return createElement(demo)
  }
})

// runtime-compiler
// template -> ast -> render(functions) -> virtual dom -> UI
