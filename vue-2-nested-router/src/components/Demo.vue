<template>
  <div>
    <h3>demo组件</h3>
    <router-view></router-view>
    <router-link to="/demo/demoList">demoList</router-link>
    <router-link to="/demo/demoMessage">demoMessage</router-link>
  </div>
</template>

<script>
export default {
  name: 'Demo',
}
</script>

<style scoped>

</style>