<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h3>Kapcb Nb!</h3>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods: {
    btnClick() {
      alert(this.message);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
