<template lang="pug">
  div#line
    header
      div.group
        h1 {{ msg }}
      div
    div.talk
      ul
        li(v-for="osg in oldMessages" v-bind:class="osg.sender")
          div
            span.txt {{ osg.msg }}
            span.time {{ osg.time }}
    footer
      input(v-model="input" placeholder="メッセージを入力")
      button(v-on:click="send") 送信
</template>

<script>
export default {
  name: 'line',
  data () {
    return {
      msg: 'petapeta',
      input: '',
      key: Math.random(),
      oldMessages: [
        {
          msg: 'こんにちは！',
          sender: 'me',
          time: '10:00'
        },
        {
          msg: 'こんにちは',
          sender: 'other',
          time: '10:02'
        },
        {
          msg: '今日はいい天気ですね',
          sender: 'other',
          time: '10:02'
        },
        {
          msg: 'そうですね',
          sender: 'me',
          time: '10:05'
        },
        {
          msg: 'LINEのパクリのシステムをつくってるんですけど、著作権的にNGとかないですかね？',
          sender: 'me',
          time: '10:05'
        }
      ]
    }
  },
  methods: {
    send: function (event) {
      if (this.input !== '') {
        let timestamp = new Date()
        let val = {
          msg: this.input,
          sender: 'me',
          time: timestamp.getHours() + ':' + timestamp.getMinutes(),
          key: this.key
        }
        this.$socket.emit('send', val)
        this.oldMessages.push(val)
        this.input = ''
      }
    }
  },
  sockets: {
    receive: function (val) {
      if (val.key !== this.key) {
        val.sender = 'other'
        this.oldMessages.push(val)
      }
    }
  }
}
</script>

<style lang="stylus">
clearfix()
  +cache('clearfix')
    &::after
      content ""
      display block
      clear both
#line
  header
    background #193352
    .group
      h1
        color #fff
        font-size 4vh
        font-weight normal
        padding 2%;
  .talk
    width 100%
    height 100%
    overflow-y scroll
    background #64b7e6
    position absolute
    ul
      li
        text-align left
        padding 1.5vh
        clearfix()
        div
          float left
          position relative
          max-width 80%
          clearfix()
          .txt
            float left
            padding 1vh 2.5vh
            background #fff
            border-radius 2vh
            font-size 4vw
          .time
            color #fff
            font-size 1vh
            position absolute
            bottom 0
            right -4vh
        &.me
          div
            float right
            .txt
              float right
              background #7eef7e
            .time
              left -4vh
  footer
    position fixed
    bottom 0
    width 100%
    background #fff
    padding 0
    text-align left
    input
      border none
      box-sizing border-box
      padding 1.5vh 1vh
      font-size 4vw
      width 100%
      &:focus
        outline 0
    button
      display inline-block
      height 100%
      border none
      position absolute
      right 0
      width 10vh
      background #2f75ce
      color #fff
      cursor pointer
      &:hover
        background #1f559a
</style>
