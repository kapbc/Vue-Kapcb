<template>
  <div>
    <h3>Web Socket Page</h3>
    <input type="text" placeholder="pls type your message" v-model="message">
    <button @click="sendMessage">发送</button>
  </div>
</template>

<script>
export default {
  name: 'WebSocket',
  data () {
    return {
      message: '',

    }
  },
  methods: {
    sendMessage () {

    }
  }
}
</script>

<style scoped>

</style>