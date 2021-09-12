<template>
  <div>
    <h3 class="title">{{ message }}</h3>
    <button @click="btnClick">按钮</button>
    <p>{{ count | showCount }}</p>
    <router-link to="/">返回上一级</router-link>
  </div>
</template>

<script>
export default {
  name: 'Kapcb',
  data () {
    return {
      message: 'Hello Vue! This is Kapcb!',
      count: 10000000000
    }
  },
  methods: {
    btnClick () {
      alert('Hello All, This is My First Vue Component!')
    }
  },
  filters: {
    showCount (count) {
      return 'Sir! Your Account Balance Is : ' + count + ' $'
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
  color: orange;
}
</style>
