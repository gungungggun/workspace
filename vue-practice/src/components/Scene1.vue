<template lang="pug">
  div#scene1
    h1 Scene1
    router-link(to="/scene2") Scene2にいくよ！

    draggable.drag(w-model="arr1" :options="{group: 'test'}" @change="log")
      div(v-for="element in arr1") {{element.name}}

    draggable.drag(v-model="arr2" :options="{group: 'test'}")
      div(v-for="element in arr2") {{element.name}}
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'scene1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr1: [
        {
          name: 'test1'
        },
        {
          name: 'test2'
        },
        {
          name: 'test3'
        },
        {
          name: 'test4'
        }
      ],
      arr2: [
        {
          name: 'test5'
        },
        {
          name: 'test6'
        }
      ]
    }
  },
  components: {
    draggable
  },
  methods: {
    log: function (evt) {
      console.log(evt)
    }
  }
}
</script>

<style lang="stylus">
.drag
  padding 10px
  div
    padding 10px
    border 1px solid #555
</style>
