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
    },
    mounted () {
//      console.log(this)
    }
  }
</script>

<style lang="scss">
  @import "~element-ui/packages/theme-chalk/src/common/var";

  .code-snippet {
    background-color: #282a36;
    display: block;
    color: #f8f8f2;
    padding: $--alert-padding;
    border-radius: $--alert-border-radius;
    margin: 1rem 0;

    &--info {
      color: $--color-text-secondary;
    }
    &--success{
      color: $--color-success;
    }
    &--error {
      color: $--color-danger;
    }
  }
</style>
