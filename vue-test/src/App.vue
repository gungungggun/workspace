<template lang="pug">
  div#app
    ComponentsTest
</template>

<script>
import ColorChange from './components/ColorChange.vue'
import SimpleForm from './components/SimpleForm.vue'
//import ComponentsTest form './components/ComponentsTest.vue'

export default {
  name: 'app',
  components: {
    ColorChange,
    SimpleForm,
    //ComponentsTest
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
