<template lang="pug">
  div#colorChange
    ul.input
      li
        span R
        input(type="range" v-model="color.r" min="0" max="255" step="1")
      li
        span G
        input(type="range" v-model="color.g" min="0" max="255" step="1")
      li
        span B
        input(type="range" v-model="color.b" min="0" max="255" step="1")
    div.code
      span {{ code }}
    div.view(:style="{background: 'rgb('+color.r+', '+color.g+', '+color.b+')'}")
</template>

<script>
export default {
  name: 'ColorChange',
  data: () => {
    return {
      color: {
        r: 0,
        g: 0,
        b: 0
      }
    }
  },
  computed: {
    code: function () {
      return '(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ')'
    }
  }
}
</script>

<style lang="stylus" scoped>
#colorChange
  .input
    list-style none
  .view
    margin 0 auto
    width 200px
    height 100px
    border 1px solid #000
</style>
