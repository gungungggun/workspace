<template lang="pug">
  header#g-header(v-if="isShowHeader")
    p ここヘッダー
</template>

<script>
export default {
  name: 'g-header',
  props: ['isShowHeader'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
</style>
