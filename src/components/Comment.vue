<template lang="pug">
    pre.comment /*{{message}}*/
</template>

if comment-no-empty = true
  bad    /**/
  bad    /* */
  bad    /*

         */

  good   /* comment */
  good   /*
          * Multi-line Comment
          **/




<script>
  export default {
    name: 'comment',
    props: {
      message: {
        type: String
      }
    }
  }
</script>

<style lang="scss">

</style>
