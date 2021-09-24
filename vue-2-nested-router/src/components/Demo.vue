<template>
  <div>
    <h3>demo组件</h3>
    <button @click="demoListClick">demoList</button>
    <button @click="demoMessageClick">demoMessage</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  methods: {
    demoListClick () {
      this.$router.push('/demo/demoList')
    },
    demoMessageClick () {
      this.$router.push('demoMessage')
    }
  }
}
</script>

<style scoped>

</style>