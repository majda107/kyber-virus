<template>
  <div class="containter">
    <div class="virus">
      <img src="../assets/virus.png">
    </div>
    <div class="home">
      <div class="home-data">
        <CountryRow :name="'Czechia'"/>
        <CountryRow :name="'All'"/>
      </div>
      <!-- <div class=""> -->
      <!-- <Display /> -->
    </div>
  </div>
</template>

<script>
// import Display from "../components/Display";
import CountryRow from '../components/CountryRow'

export default {
  name: "HomeView",
  components: {
    // Display
    CountryRow
  },
  props: {}
};
</script>

<style lang="sass" scoped>
.virus
  // background-image: url('../assets/virus.png')
  // min-height: 600px
  // width: 60%
  background-size: contain
  position: absolute
  display: flex
  justify-content: flex-start
  opacity: 0.2
  user-select: none
  z-index: -10

  img
    width: 80%

.display
  padding-top: 100px

.home
  padding-top: 200px
  padding-bottom: 160px

  &-data
    width: 86%
    margin-left: auto
    margin-right: auto
    display: grid
    grid-auto-flow: row
    row-gap: 80px
    grid-template-columns: 100%

@media screen and ( max-width: 600px )
  .home
    padding-top: 120px

</style>
