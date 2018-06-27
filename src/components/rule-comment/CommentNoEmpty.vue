<template lang="pug">
  .comment-no-empty
    el-radio-group(v-model="commentNoEmpty")
      el-radio-button(:label="true")
      el-radio-button(:label="false")
      el-radio-button(:label="null") Disable

    code-snippet(language="css", :type="getSnippetType(false, commentNoEmpty)", ref="emptyNoSpace")
      comment

    code-snippet(language="css", :type="getSnippetType(false, commentNoEmpty)", ref="emptyIncludeSpace")
      comment(message=" ")

    code-snippet(language="css", :type="getSnippetType(false, commentNoEmpty)", ref="emptyMultyline")
      comment
        br
        span.empty &nbsp;
        br

    code-snippet(language="css", :type="getSnippetType(true, commentNoEmpty)", ref="commentIncludeSpace")
      comment
        span.empty &nbsp;
        | comment
        span.empty &nbsp;

    code-snippet(language="css", :type="getSnippetType(true, commentNoEmpty)", ref="commentMultyline")
      comment(message="\n * Multi-line \Comment \n *")

</template>

<script>
  import Comment from '../Comment.vue'
  import CodeSnippet from '../CodeSnippet.vue'

  export default {
    name: 'comment-no-empty',
    components: {
      Comment,
      CodeSnippet
    },
    data () {
      return {
        commentNoEmpty: null
      }
    },
    methods: {
      getSnippetType (toCheck, selected) {
        if (typeof selected === 'boolean') {
          if (toCheck && selected) return 'error'
          return 'success'
        }
        return 'info'
      }
    }
  }
</script>

<style lang="scss">
  .empty {
    background-color: #44475a;
  }
</style>
