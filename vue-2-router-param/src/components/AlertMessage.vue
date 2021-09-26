<template>
  <div>
    <h3>Alert Message Page</h3>
    <input type="text" v-model="inputText">
    <button @click="btnClick">发送</button>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  data () {
    return {
      message: '',
      inputText: ''
    }
  },
  methods: {
    btnClick () {
      console.log('aaaaaaa')
      this.message = this.inputText
    }
  }
}
</script>

<style scoped>

</style>