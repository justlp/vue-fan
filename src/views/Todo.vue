<template lang="pug">
  .todo
    css-rule
      template(slot="selector") a
      template(slot="declaration-block")
        declaration-block(:properties="cssProperties")
</template>

<style lang="scss">

</style>

<script>
  import CssRule from '../components/CssRule'
  import DeclarationBlock from '../components/DeclarationBlock'

  export default {
    name: 'Todo',
    components: {
      CssRule,
      DeclarationBlock
    },
    data: function () {
      return {
        cssProperties: [
          {
            name: 'color',
            value: 'red',
            indentBetweenColon: 1
          },
          {
            name: 'background-color',
            value: 'green',
            isImportant: true
          }
        ]
      }
    }
  }
</script>
