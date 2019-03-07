<template lang="pug">
  div#app
    SimpleForm
</template>

<script>
import ColorChange from './components/ColorChange.vue'
import SimpleForm from './components/SimpleForm.vue'

export default {
  name: 'app',
  components: {
    ColorChange,
    SimpleForm
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
