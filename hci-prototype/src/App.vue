<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Material+Icons+Round');
@import url('https://fonts.googleapis.com/css?family=Inter');

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif, Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>

<script>

import NavigationBar from "@/components/NavigationBar";

export default {
  components: {
    NavigationBar,
  },
}
</script>