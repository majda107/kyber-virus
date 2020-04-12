<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <HomeView/> -->
    <div class="navigation-bar">
      <Navigation />
    </div>
    <div class="view">
      <div class="view-inner">
      <transition name="fade">
        <router-view />
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeView from './views/HomeView'
import { mapActions } from "vuex";

import Navigation from "./components/Navigation";

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

#app
  position: relative

.navigation-bar
  position: absolute
  width: 100%
  z-index: 1000

body
  background-color: $background-color

// .view
//   width: 92%
//   margin-left: auto
//   margin-right: auto
//   margin-top: 60px

.view
  position: relative
  width: 100%

  &-inner
    width: 100%
    position: absolute

input, button
  background-color: $dark-color
  font-size: 1.4rem
  border-radius: 4px
  border: none
  padding: 4px 8px 4px 8px

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity: 0
  position: absolute
  width: 100%
</style>
