<template>
  <div>
    <h3>这是code router组件</h3>
    <button @click="demoClick">demo页面</button>
    <button @click="helloWorldClick">hello world页面</button>
    <button @click="indexClick">index页面</button>
    <button @click="backClick">返回</button>
  </div>
</template>

<script>
export default {
  name: 'codeRouter',
  methods: {
    demoClick () {
      this.$route.query('demo')
    },
    backClick () {
      this.$route.go(-1)
    }
  }
}
</script>

<style scoped>

</style>