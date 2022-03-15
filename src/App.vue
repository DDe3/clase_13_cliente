<template>
    <Consulta/> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Consulta from './components/Consulta.vue'

export default {
  name: 'App',
  components: {
    Consulta
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
