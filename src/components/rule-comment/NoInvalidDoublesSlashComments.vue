<template lang="pug">
  .no-invalid-doubles-slash-comments
    el-radio-group(v-model="noInvalidDoubleSlashComments")
      el-radio-button(:label="true")
      el-radio-button(:label="false")
      el-radio-button(:label="null")

    code-snippet(language="css", :type="null", ref="propertyComment")
      css-rule
        template(slot="selector") a
        template(slot="declaration-block")
          comment
            declaration-block(:properties="cssProperties")

    code-snippet(language="css", :type="null", ref="selectorComment")
      css-rule
        template(slot="selector") a
        template(slot="declaration-block")
          comment
            declaration-block(:properties="cssProperties")

    code-snippet(language="css", :type="null", ref="propertyDoubleSlashComment")
      css-rule
        template(slot="selector") a
        template(slot="declaration-block")
          comment(type="doubleSlash")
            declaration-block(:properties="cssProperties")

    code-snippet(language="css", :type="null", ref="selectorDoubleSlashComment")
      comment(type="doubleSlash")
        css-rule
          template(slot="selector") a
          template(slot="declaration-block")
            declaration-block(:properties="cssProperties")

</template>

<script>
  import CodeSnippet from '../CodeSnippet.vue'
  import CssRule from '../CssRule.vue'
  import Comment from '../Comment.vue'
  import DeclarationBlock from '../DeclarationBlock.vue'

  export default {
    name: 'no-invalid-doubles-slash-comments',
    components: {
      CodeSnippet,
      CssRule,
      Comment,
      DeclarationBlock
    },
    data () {
      return {
        noInvalidDoubleSlashComments: null,
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

<style lang="scss">

</style>
