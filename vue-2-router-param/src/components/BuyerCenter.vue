<template>
  <div>
    <h3>Buyer Center</h3>
    <h4>My Name is : {{ $route.query.name }} , user id is : {{ $route.query.userId }}</h4>
    <button @click="showRouterClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'BuyerCenter',
  data () {
    return {}
  },
  methods: {
    showRouterClick () {
      console.log('$router is : ' + this.$router)
      console.log('$route is : ' + this.$route)
    }
  }
}
</script>

<style scoped>

</style>
