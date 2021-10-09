<template>
  <div>
    <h3>Buyer Center</h3>
    <h4>My Name is : {{ $route.query.name }} , user id is : {{ $route.query.userId }}</h4>
  </div>
</template>

<script>
export default {
  name: 'BuyerCenter',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>

</style>
