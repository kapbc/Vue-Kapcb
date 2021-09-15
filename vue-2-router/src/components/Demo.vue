<template>
  <div>
    <h3 class="title">{{ title }}</h3>
    <button @click="alert">按钮</button>
    <router-link to="/">返回上一页</router-link>
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
