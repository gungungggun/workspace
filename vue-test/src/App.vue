<template lang="pug">
  div#app
    div
      input(v-model="message" placeholder="edit me")
      p Message is: {{ oMessage }}
    div
      img(:class="{ rotate: isRotate }" alt="Vue logo" src="./assets/logo.png")
      p {{ test }}
      button(@click="isRotate = !isRotate") 回転
      button(@click="increment()") 増える
      button(@click="decrement()") 減る
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      message: '',
      test: 1,
      isRotate: false
    }
  },
  computed: {
    oMessage: function () {
      return this.message.toUpperCase()
    }
  },
  methods: {
    increment: function () {
      this.test++
    },
    decrement: function () {
      this.test--
    }
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
  img
    transition .5s
    &.rotate
      transform rotate(360deg)
  p
    color #ff0000
    font-size 30px
</style>
