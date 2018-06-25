<template lang="pug">
  .index
    el-container
      el-header Header
      el-main
        el-row(type="flex", justify="middle", align="middle")
          el-col(:span="12")
            code-snippet(language="css", type="info")
              css-rule
                template(slot="selector") a
                template(slot="declaration-block")
                  declaration-block(:properties="cssProperties")
          el-col(:span="12") 2
            el-button(@click="changingCssPropertiesHandle") s

</template>

<style lang="scss">

</style>

<script>
  import CodeSnippet from '../components/CodeSnippet.vue'
  import CssRule from '../components/CssRule'
  import DeclarationBlock from '../components/DeclarationBlock'

  export default {
    name: 'Index',
    components: {
      CodeSnippet,
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
    },
    methods: {
      changingCssPropertiesHandle () {
        console.log('ss')
      }
    }
  }
</script>
