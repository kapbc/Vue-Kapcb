<template>
  <div>
    <h3 class="title">demo中的组件</h3>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
  methods: {
    btnClick() {
      alert(this.message);
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