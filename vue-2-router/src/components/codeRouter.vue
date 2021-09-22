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
      // 通过代码修改路由
      this.$router.push('demo')
    },
    helloWorldClick () {
      this.$router.push('helloWorld')
    },
    indexClick () {
      this.$router.push('/')
    },
    backClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>