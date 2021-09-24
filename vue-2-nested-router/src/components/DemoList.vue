<template>
  <div>
    <ul>
      <li v-for="(item, index) in sportList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DemoList',
  data () {
    return {
      sportList: ['篮球', '足球', '乒乓球', '网球']
    }
  }
}
</script>

<style scoped>

</style>