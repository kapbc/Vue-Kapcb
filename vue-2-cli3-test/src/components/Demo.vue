<template>
  <div>
    <h3 class="title">{{ title }}</h3>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      title: 'This Is A Vue Component Page!',
      alertMessage: 'Hello Kapcb!'
    }
  },
  methods: {
    btnClick () {
      alert(this.alertMessage)
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 26px;
  color: orange;
}
</style>