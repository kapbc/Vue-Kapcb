<template>
  <div>
    <p>热部署</p>
    <h3 class="title">demo中的组件</h3>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      message: 'Hello Vue! This is hot devtool',
    }
  },
  methods: {
    btnClick () {
      alert(this.message)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 18px;
  color: orange;
}
</style>