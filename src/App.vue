<template>
  <div id="app">
   <div ref="chartDom" style="height: 60%;"></div>
  </div>
</template>

<script>
import echarts from './echarts'
export default {
  name: 'App',
  mounted () {
   let instance =  new echarts(this.$refs.chartDom)
    console.log(instance)
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
