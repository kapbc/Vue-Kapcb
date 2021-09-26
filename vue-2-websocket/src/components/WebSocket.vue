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
      webSocket: null,
      client: 'buyer',
      userId: 123456789
    }
  },
  mounted () {
    this.initWebSocket()
  },
  destroyed () {
    this.onClose()
  },
  methods: {
    initWebSocket () {
      console.log('begin to connect web socket')
      this.webSocket = new WebSocket('' + this.client + '/' + this.userId)
      this.webSocket.onOpen = this.onOpen
      this.webSocket.onError = this.onError
      this.webSocket.onMessage = this.onMessage
      this.webSocket.onClose = this.onClose
    },
    sendMessage () {
      const param = {
        message: this.message,
        userId: this.userId
      }
      try {
        this.webSocket.send(JSON.stringify(param))
      } catch (err) {
        console.log('web socket send message error, error message is : ' + err.code)
      }
    },
    onOpen () {
      console.log('connect web socket success!')
    },
    onError () {
      console.log('connect web socket error!')
    },
    onMessage () {
      console.log('web socket receive message')
    },
    onClose () {
      console.log('web socket will close')
    }
  }
}
</script>

<style scoped>

</style>
