<template lang="pug">
  div#simpleForm
    div
      input(
        type="text"
        v-model="input"
        placeholder="6文字以上入力してね"
        :class="{ error: hasError, success: isSuccess }"
      )
      p(v-show="hasError") エラーだよ

    button(:disabled="!isSuccess") 送信
</template>

<script>
export default {
  data: () => {
    return {
      input: ''
    }
  },
  computed: {
    hasError: function () {
      if (this.input == '') return false
      if (this.input.length > 5) {
        return false
      }
      return true
    },
    isSuccess: function () {
      if (this.input.length > 5) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="stylus" scoped>
#simpleForm
  input
    &.error
      background #c44
    &.success
      background #4f4
  p
    color #b00
</style>
