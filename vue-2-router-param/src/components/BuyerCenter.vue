<template>
  <div>
    <h3>Buyer Center</h3>
    <h4>My Name is : {{ $route.query.name }} , user id is : {{ $route.query.userId }}</h4>
    <button @click="showRouterClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'BuyerCenter',
  // 组件创建完成时回调
  created () {
  },

  // 将组件中的模板挂载到DOM元素上时回调
  mounted () {
  },

  // 界面发生更新时调用
  // 比如
  updated () {
  },
  data () {
    return {}
  },
  methods: {
    showRouterClick () {
      // $router 是路由器
      // $route 是路由
      // 所有的组件都继承自 Vue 类的原型
      console.log('$router is : ' + this.$router)
      console.log('$route is : ' + this.$route)
      this.test('BuyerCenter')
    }
  }
}
</script>

<style scoped>

</style>
