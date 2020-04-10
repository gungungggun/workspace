<template lang="pug">
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    Drag
</template>

<script>
import Drag from './components/Drag.vue'

export default {
  components: {
    Drag
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
