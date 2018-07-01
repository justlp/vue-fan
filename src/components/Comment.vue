<template lang="pug">
    pre.comment
      template(v-if="type === 'doubleSlash'")
        | //
      template(v-else)
        | /*
      slot {{ message }}
      template(v-if="type !== 'doubleSlash'")
        | */
</template>

<script>
  export default {
    name: 'comment',
    props: {
      type: {
        type: String,
        default: 'comment'
      },
      message: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  @import "~element-ui/packages/theme-chalk/src/common/var";

  .comment {
    display: inline-block;
    margin: 0;
    color: $--color-text-secondary;
  }
</style>
