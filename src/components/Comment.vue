<template lang="pug">
  pre(:class="classes")
    template(v-if="type === 'doubleSlash'")
      | //
    template(v-else)
      | /*
    slot {{ message }}
    template(v-if="type !== 'doubleSlash'")
      | */
</template>

<script>
  const blockCls = 'comment'

  export default {
    name: 'comment',
    props: {
      type: {
        type: String,
        default: 'comment'
      },
      message: {
        type: String
      },
      modifier: {
        type: Array
      }
    },
    computed: {
      classes () {
        let classes = [blockCls]
        if (this.modifier) classes.push(this.modifier)

        return classes
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

    &--color-inherited {
      color: inherit;
    }
  }
</style>
