<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>

    <world></world>
  </div>
</template>

<script>
var t = 'test';
console.log('test')
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
