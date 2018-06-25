<template lang="pug">
    pre.comment
      | /*
      slot {{message}}
      | */
</template>

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
