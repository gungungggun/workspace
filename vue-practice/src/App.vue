<template lang="pug">
  div#app
    g-header
    router-view
</template>

<script>
import GHeader from './components/globals/GHeader'

export default {
  name: 'app',
  data () {
    return {
      isShowHeader: true
    }
  },
  components: {
    GHeader
  }
}
</script>

<style lang="stylus">
html,body
  margin 0
  padding 0
  width 100%
  height 100%
  overflow hidden
h1
  margin 0
  padding 0
ul
  margin 0
  padding 0
  list-style-type none
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
