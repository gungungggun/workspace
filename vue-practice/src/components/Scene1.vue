<template lang="pug">
  div#scene1
    h1 Scene1
    router-link(to="/scene2") Scene2にいくよ！
</template>

<script>
export default {
  name: 'scene1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
</style>
