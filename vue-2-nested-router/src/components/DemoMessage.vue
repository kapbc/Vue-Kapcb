<template>
  <div>
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: 'DemoMessage',
  data () {
    return {
      message: 'Hello Nested Router!'
    }
  }
}
</script>

<style scoped>

</style>