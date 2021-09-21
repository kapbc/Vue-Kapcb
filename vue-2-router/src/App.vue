<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 决定之后路径改变之后, 渲染的内容出现在哪个地方, 相当于占位符的作用 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
