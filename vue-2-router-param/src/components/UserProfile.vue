<template>
  <div>
    <h3>User Profile</h3>
    <h4>Current User Id Is : {{ getUserId }}</h4>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  computed: {
    getUserId () {
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>