<template>
  <div>
    <h3>user list page</h3>
    <strong>current user id is : {{ getUserId }}</strong><br/>
    <strong>current user id is : {{ $route.params.userId }}</strong>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      showMessage: 'Hello Vue!'
    }
  },
  computed: {
    getUserId () {
      console.log(this.$route.params)
      console.log(this.$route.params.userId)
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>