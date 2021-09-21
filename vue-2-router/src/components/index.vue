<template>
  <div>
    <h2>index页面</h2>
    <h4>默认访问首页</h4>
    <!-- tag属性可以指定让router-link渲染之后的元素 -->
    <router-link tag="button" to="/helloWorld">访问HelloWords页面</router-link>
    <router-link tag="div" to="/demo" replace>访问demo页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>