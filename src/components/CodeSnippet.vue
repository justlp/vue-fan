<template lang="pug">
  code(:class="classes")
    slot

</template>

<script>
  import { oneOf } from '../utils/utils.js'

  const blockCls = 'code-snippet'

  export default {
    name: 'code-snippet',
    props: {
      language: {
        type: String,
        required: true
      },
      type: {
        validator (value) {
          return oneOf(value, ['success', 'info', 'error'])
        },
        default: 'info'
      }
    },
    computed: {
      classes () {
        return [
          `${blockCls}`,
          `${blockCls}--${this.type}`
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import "~element-ui/packages/theme-chalk/src/common/var";

  .code-snippet {

    &--info {
      color: $--color-text-primary;
    }
    &--success{
      color: $--color-success;
    }
    &--error {
      color: $--color-danger;
    }
  }
</style>
