<template>
    <span class="selector">{{ name }}</span>
</template>

<script>
    export default {
      name: 'selector',
      data: function () {
        return {
          name: '.foo'
        }
      }
    }
</script>

<style scoped></style>
