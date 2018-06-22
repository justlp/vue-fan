<template lang="pug">
  div(:class="classes")
    div.css-rule__selector
      slot(name="selector")
    div.css-rule__brackets {
    div.css-rule__declaration-block
      slot(name="declaration-block")
    div.css-rule__brackets }
</template>

<script>
  const blockCls = 'css-rule'

  export default {
    name: 'css-rule',
    computed: {
      classes () {
        return [
          `${blockCls}`
        ]
      }
    }
  }

</script>
