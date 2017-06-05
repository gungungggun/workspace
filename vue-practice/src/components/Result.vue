<template lang="pug">
  div#result
    div.simple
      div.place
        span 甲子園球場
      div.middle
        div.team
          div.left(v-bind:class="{win: result.teamA > result.teamB && score, lose: result.teamA < result.teamB && score}")
            span 報徳学園
          div.right(v-bind:class="{win: result.teamA < result.teamB && score, lose: result.teamA > result.teamB && score}")
            span 早稲田実業
        div.see(v-on:click="scoreCumpute()")
          span.view(v-bind:class="{result: score}") 試合結果を見る
        transition(name="result")
          div.score(v-if="score")
            span.s-left(v-bind:class="{win: result.teamA > result.teamB && score, lose: result.teamA < result.teamB && score}") {{ result.teamA }}
            span.s-right(v-bind:class="{win: result.teamA < result.teamB && score, lose: result.teamA > result.teamB && score}") {{ result.teamB }}

      div.wrapHero(v-bind:class="{show: hero}")
        transition(name="slide-in")
          div.hero(v-if="score")
            input#hero(type="checkbox" v-model="hero")
            label(for="hero")
              div.arw
                i.fa-arw.arw1
                i.fa-arw.arw2
                i.fa-arw.arw3
              span Today's hero
            transition(name="bounce")
              div.box(v-if="hero" v-bind:class="{boxSelect: boxSelect}")
                div.elm(v-on:click="heroCompute(0)" v-bind:class="{select: select == 0}")
                  img(src="../assets/img_man1.jpg")
                div.elm(v-on:click="heroCompute(1)" v-bind:class="{select: select == 1}")
                  img(src="../assets/img_man2.jpg")
                div.elm(v-on:click="heroCompute(2)" v-bind:class="{select: select == 2}")
                  img(src="../assets/img_man3.jpg")
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      hero: false,
      score: false,
      scoreResult: false,
      showHero: false,
      boxSelect: false,
      select: NaN,
      result: {
        teamA: 7,
        teamB: 1
      }
    }
  },
  methods: {
    scoreCumpute: function () {
      this.score = true
    },
    heroCompute: function (num) {
      this.select = num
      this.boxSelect = true
    }
  }
}
</script>

<style lang="stylus">

.slide-in-enter-active
  animation slide-in 1.5s

.result-enter-active
  animation result-in 1.5s

@keyframes slide-in
  0%
    opacity 0
    height 0
  100%
    opacity 1
    height 100px

@keyframes result-in
  0%
    opacity 0
  30%
    opacity 0
  100%
    opacity 1

clearfix()
  +cache('clearfix')
    &::after
      content ""
      display block
      clear both

@keyframes blinking
  0%
    opacity 1
  100%
    opacity .6

blinking(count=infinite)
  animation-name blinking
  animation-duration 0.5s
  animation-iteration-count count
  animation-timing-function ease-in-out
  animation-direction alternate
  animation-delay 0.5s

@font-face
  font-family 'nico'
  src url('../assets/webfonts/nicomoji-plus_1.11.ttf')
@font-face
  font-family 'awesome'
  src url('../assets/webfonts/fontawesome-webfont.ttf')

#result
  font-family 'nico'
  padding 2%
.simple
  background #fff
  border 3px solid #777
  position relative
  .middle
    position relative
    .team
      clearfix()
      .left
        float left
        background #00A3D8
        color #fff
        width:50%
        padding 5% 0
        &.lose
          // background #167796
        span
          font-size 4vw
          padding-right 30%
      .right
        float right
        background #D7183E
        color #fff
        width:50%
        padding 5% 0
        transition 1s
        &.lose
          // background #881028
        span
          font-size 4vw
          padding-left 30%
    .see
      position absolute
      top 0
      width 100%
      padding 4% 0
      cursor pointer
      span.view
        overflow hidden
        display block
        border 1px solid #fff
        font-size 4vw
        margin 0 auto
        width 38%
        height 7vw
        line-height 7.5vw
        color #fff
        background #18a249
        transition 0.5s
        position relative
        &.result
          top: 3.5vw
          width 2vw
          height 0
          transform rotateZ(720deg);
    .score
      position absolute
      top 0
      width 100%
      .s-left
        display inline-block
        font-size 11vw
        color #fff
        padding-right 8%
        &.win
          color #F7CF58
      .s-right
        display inline-block
        font-size 11vw
        color #fff
        padding-left 8%
        padding-top 1%
        &.win
          color #F7CF58
  .place
    background #F7CF58
    padding 2%
    span
      font-size 4vw
      color #000
  .wrapHero
    overflow hidden
    max-height 8vw
    &.show
      max-height initial
  .hero
    input[type="checkbox"]
      display none
    .arw
      display inline-block
      margin-right 7px
      position relative
      top 2px
      blinking()
      .fa-arw
        font-style normal
        line-height 4px
        display table-caption
        &:before
          font-family 'awesome'
          content '\f107'
          display block
    label
      font-size 4vw
      cursor pointer
      color #fff
      background #18a249
      display block
      width 100%
      padding 2% 0
      span
        blinking()
    .box
      background #00A3D8
      position relative
      .elm
        position relative
        overflow hidden
        width 20%
        display inline-block
        padding 2%
        &.select
          position absolute
          top 0
          left 0
          width 40%
        img
          width 100%
          border-radius 50%
          border 2px solid #fff
      &.boxSelect
        text-align right

.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0

.bounce-enter-active
  animation: bounce-in .5s;
.bounce-leave-active
  animation: bounce-in .5s reverse;

@keyframes bounce-in
  0%
    opacity 0
    transform scale(0)
  50%
    opacity .8
    transform scale(1.5)
  100%
    opacity 1
    transform scale(1)

.reflection
    height 100%
    width 30px
    position absolute
    top -180px
    left 0
    background-color #fff
    opacity 0
    transform rotate(45deg)
    animation reflection 2s ease-in-out infinite

@keyframes reflection
  0%
    transform scale(0) rotate(45deg)
    opacity 0
  80%
    transform scale(0) rotate(45deg)
    opacity 0.5
  81%
    transform scale(4) rotate(45deg)
    opacity: 1
  100%
    transform scale(50) rotate(45deg)
    opacity 0
</style>
