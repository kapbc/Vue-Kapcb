<template>
  <div>
    <h3>Alert Message Page</h3>
    <input type="text" v-model="inputText">
    <button @click="btnClick">发送</button>
    <h3>{{ message }}</h3>
    <router-link :to="'userProfile/' + this.userId">User Profile</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  data () {
    return {
      message: '',
      inputText: '',
      userId: 123456789
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
