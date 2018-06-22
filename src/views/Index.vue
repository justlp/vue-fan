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
                  div color: red;
                  div /* comment */

          el-col(:span="12") 2

</template>

<style lang="scss">

</style>

<script>
  import CodeSnippet from '../components/CodeSnippet.vue'
  import CssRule from '../components/CssRule'

  export default {
    name: 'Index',
    components: {
      CodeSnippet,
      CssRule
    }
  }
</script>
