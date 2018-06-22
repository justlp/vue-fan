<template lang="pug">
  .index
    el-container
      el-header Header
      el-main
        el-row(type="flex", justify="middle", align="middle")
          el-col(:span="12")
            code-snippet(language="css", type="info") 1
          el-col(:span="12") 2

</template>

<style lang="scss">

</style>

<script>
  import CodeSnippet from '../components/CodeSnippet.vue'

  export default {
    name: 'Index',
    components: {
      CodeSnippet
    }
  }
</script>
