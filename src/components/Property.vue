<template>
    <span class="property">
        <span class="property__name">{{ name }}</span>
        <mark class="mark" v-if="hasSpaceBeforeColon">&nbsp;</mark>
        <span class="property__colon">:</span>
        <mark class="mark" v-if="hasSpaceAfterColon">&nbsp;</mark>
        <span class="property__value">{{ value }}</span>
        <span class="property__important" v-if="isImportant">!important</span>
        <span class="property__semicolon" v-if="isSemicolon">;</span>
    </span>
</template>

<script>
    export default {
      name: 'property',
      data: function () {
        return {
          name: 'color', // or put another component
          value: '#fff', // or put another component
          isSemicolon: true,
          isImportant: true,
          hasSpaceBeforeColon: true,
          hasSpaceAfterColon: true
        }
      }
    }
</script>

<style scoped>
    span{
        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    }
</style>