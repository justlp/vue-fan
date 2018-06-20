<template>
    <span class="vendor-prefix">{{ getBrowserPrefix }}</span>
</template>

<script>
  export default {
    data: function () {
      return {
        browser: 'chrome'
      }
    },
    computed: {
      getBrowserPrefix: function () {
        var prefixList = {
          chrome: '-webkit-',
          firefox: '-moz-',
          ie: {
            colon: '::',
            standard: '-ms-'
          },
          opera: '-o-',
          default: 'def'
        }
        if (typeof this.browser !== 'string' && this.browser.name && this.browser.name === 'ie') {
          if (this.isColon) {
            return prefixList.ie.colon
          } else {
            return prefixList.ie.standard
          }
        }
        return typeof prefixList[this.browser] !== 'undefined' ? prefixList[this.browser] : prefixList.default
      }
    }
  }
</script>

<style scoped></style>
