<template>
  <li>{{ todo.text }}</li>
</template>

<script>
export default {
  name: 'world',
  props: ['todo']
}
</script>

<style scoped>
  div {
    color: #42b983;
  }
</style>
