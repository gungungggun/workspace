<template lang="pug">
.drag
  draggable.dragabble(
    :list="data"
    :group="{ name: 'timeline', pull: 'clone', put: false }"
    :sort="false"
  )
    transition-group
      .d(v-for="d in data" :key="d.id")
        p {{ d.name }}

  draggable.dragabble(
    :list="timeline"
    group="timeline"
    :options="{animation:300}"
  )
    transition-group
      .d(v-for="(d, i) in timeline" :key="i")
        p {{ d.name }}
        .close(@click="deleteTimeline(i)") x
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: '要素1'
        },
        {
          id: 2,
          name: '要素2'
        },
        {
          id: 3,
          name: '要素3'
        }
      ],
      timeline: []
    }
  },
  methods: {
    deleteTimeline(i) {
      this.timeline.splice(i, 1)
    }
  }
}
</script>

<style lang="stylus">
.drag
  margin 0
  .dragabble
    margin-top 20px
    width 100%
    height 100px
    box-sizing border-box
    padding 0 10px
    background #fcfcfc
    border 1px solid #333
    span
      height 100%
      display flex
      align-items center
   .d
     width 50px
     height 50px
     border 1px solid #333
     background #eee
     padding 10px
     margin-right 10px
     position relative
     .close
       position absolute
       right -8px
       top -8px
       background #fff
       width 20px
       height 20px
       border 1px solid #333
       border-radius 50%
       display flex
       justify-content center
       align-items center
</style>
