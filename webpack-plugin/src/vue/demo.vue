<template>
  <div>
    <p class="title">这是demo.vue中的组件</p>
    <h3>{{ message }}</h3>
    <button @click="_btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      message: 'Hello Vue! Webpack dev server'
    }
  },
  methods: {
    _btnClick() {
      alert('button click!');
    }
  }
}
</script>

<style scoped>
.title {
  color: orange;
  font-size: 18px;
}
</style>