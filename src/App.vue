<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Register/>
  </div>
</template>

<script>
/* eslint-disable */
import Register from './components/Register'

export default {
  name: 'app',
  components: {
    Register
  }
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
