<template>
  <div class="containter">
    <div class="navigation">
      <router-link to="/home" class="navigation-link">HOME</router-link>
      <router-link to="/global" class="navigation-link">GLOBAL</router-link>
      <router-link to="/search" class="navigation-link">SEARCH</router-link>
      <router-link to="/prevention" class="navigation-link">PREVENTION</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/variables'

.containter
  display: grid
  justify-content: center
  justify-items: center
  z-index: 1000

.navigation
  padding: 30px
  display: grid
  grid-auto-flow: column
  column-gap: 60px

  &-link
    color: $white-color
    font-weight: 200
    font-size: 1.8rem
    text-decoration: none
    transition: color .5s

  &-link::after
    font-weight: 500
    font-size: 1.8rem
    content: attr(title)
    visibility: hidden
    overflow: hidden

  &-link:hover
    color: $primary-color

.link-active
  font-weight: 500
</style>