<template>
  <div>
    <h2 class="title">demoComponent.vue中的template</h2>
    {{ message }}
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'demoComponent',
  data () {
    return {
      message: 'Hello. This is Demo Component!',
    }
  },
  methods: {
    btnClick () {
      alert('This is button click event!')
    }
  },
}
</script>

<style scoped>
.title {
  font-size: 18px;
  color: orange;
}
</style>