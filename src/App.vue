<template>
  <div id="app">
    <y-button>{{$store.state.age}}</y-button>
    <y-button>{{$store.getters.lastAge}}</y-button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  mounted() {
    /* setInterval(() => {
      this.$store.state.age += 1
    }, 1000) */
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
