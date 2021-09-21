<template>
  <div>
    <h2>index页面</h2>
    <h4>默认访问首页</h4>
    <!-- tag属性可以指定让router-link渲染之后的元素 -->
    <!-- replace属性用于修改使用history的history.replaceState(), 页面跳转之后不会返回 -->
    <!-- active-class属性用于指定被选中时的class样式 -->
    <router-link tag="button" to="/helloWorld" active-class="active" replace>访问HelloWords页面</router-link>
    <router-link tag="button" to="/demo" replace>访问demo页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.active {
  color: red;
}
</style>