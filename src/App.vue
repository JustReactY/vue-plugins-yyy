<template>
  <div id="app">
    <my-jsx>
      <span>i an slot </span>
      <template slot="nav">i an nav</template>
    </my-jsx>
  </div>
</template>

<script>
import myJSX from '@/components/myJSX'

export default {
  name: 'App',
  components: {
    'my-jsx': myJSX
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
