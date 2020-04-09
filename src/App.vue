<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomeView/> -->
    <div class="navigation">
      <Navigation/>
    </div>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './views/HomeView'
import { mapActions } from "vuex";

import Navigation from './components/Navigation'

export default {
  name: "App",
  components: {
    // HelloWorld
    // HomeView
    Navigation
  },
  methods: {
    ...mapActions(["fetchStatistics"])
  },
  created: function() {
    this.fetchStatistics();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  overflow-y: scroll;
}
</style>

<style lang="sass">
@import '../sass/abstracts/variables'

*
  color: $white-color
  font-family: 'Roboto'
  padding: 0
  margin: 0

body
  background-color: $darker-color

.view
  width: 92%
  margin-left: auto
  margin-right: auto
  margin-top: 60px


input, button
  background-color: $dark-color
  font-size: 1.4rem
  border-radius: 4px
  border: none
  padding: 4px 8px 4px 8px

</style>
