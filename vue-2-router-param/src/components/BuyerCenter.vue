<template>
  <div>
    <h3>Buyer Center</h3>
    <h4>My Name is : {{ $route.query.name }} , user id is : {{ $route.query.userId }}</h4>
    <button @click="showRouterClick">按钮</button>
    <h3>{{ name }}</h3>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
export default {
  name: 'BuyerCenter',
  // 组件创建完成时回调
  created () {
    console.log('Buyer Center Component Create Finished!')
  },

  // 将组件中的模板挂载到DOM元素上时回调
  mounted () {
    console.log('Buyer Center Template Mounted To DOM!')
  },

  // 界面发生更新时调用
  // 比如数据发生了该表都会调用这个方法
  updated () {
    console.log('Buyer Center Component Data Updated!')
    console.log('name 属性发生改变了')
  },

  //
  destroyed () {
    console.log('Buyer Center Component Destoryed!')
  },

  data () {
    return {
      name: 'kapcb'
    }
  },
  methods: {
    showRouterClick () {
      // $router 是路由器
      // $route 是路由
      // 所有的组件都继承自 Vue 类的原型
      console.log('$router is : ' + this.$router)
      console.log('$route is : ' + this.$route)
      this.test('BuyerCenter')
    },
    changeName () {
      this.name = 'Mike Chen'
    }
  }
}
</script>

<style scoped>

</style>
