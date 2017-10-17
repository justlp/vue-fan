<template>
    <span class="comment">
        <span class="comment__open-marker">*</span>
        <mark v-if="hasWhitespaceInsideMarkers">&nbsp;</mark>
        <span class="comment__content">comment</span>
        <mark v-if="hasWhitespaceInsideMarkers">&nbsp;</mark>
        <span class="comment__close-marker">*/</span>
    </span>
</template>

<script>
  export default {
    name: 'comment',
    data: function () {
      return {
        hasWhitespaceInsideMarkers: true
      }
    }
  }
</script>

<style scoped>
    span {
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
</style>