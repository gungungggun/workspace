<template lang="pug">
  div#app
    g-header
    img(src="./assets/logo.png")
    router-view
</template>

<script>
import GHeader from './components/globals/GHeader'

export default {
  name: 'app',
  components: {
    GHeader
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
