<template lang="pug">
  div(:class="classes")
    div.css-rule__selector
      slot(name="selector")
    div.css-rule__braces {
    div.css-rule__declaration-block
      slot(name="declaration-block")
    div.css-rule__braces }
</template>

<script>
  const blockCls = 'css-rule'

  export default {
    name: 'css-rule',
    props: {
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
  .css-rule {
    &__selector{
      display: inline-block;
    }
    &__braces{
      display: inline-block;
    }
    &__declaration-block{
      padding-left: 1rem;
    }
  }
</style>
