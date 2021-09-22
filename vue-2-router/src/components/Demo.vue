<template>
  <div>
    <h3 class="title">{{ title }}</h3>
    <button @click="alert">按钮</button>
    <router-link to="/">返回首页</router-link>
    <button @click="codeRouterClick">进入code route 页面</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title: 'Hello Vue!',
      alertMessage: 'Hello Kapcb!'
    }
  },
  methods: {
    alert () {
      alert(this.alertMessage)
    },
    codeRouterClick () {
      this.$router.push('codeRouter')
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 22px;
  color: orange;
}
</style>