<template>
  <div class="containter">
    <div class="navigation">
      <router-link to="/home" draggable="false" class="navigation-link">HOME</router-link>
      <router-link to="/global" draggable="false" class="navigation-link">GLOBAL</router-link>
      <router-link to="/search" draggable="false" class="navigation-link">SEARCH</router-link>
      <router-link to="/prevention"  class="navigation-link">PREVENTION</router-link>
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
    // font-weight: 200
    font-weight: 500
    font-size: 1.8rem
    text-decoration: none
    transition: color .5s
    user-select: none
    opacity: 0.35
    transition: opacity 300ms, color 300ms

  &-link::after
    font-size: 1.8rem
    content: attr(title)
    visibility: hidden
    overflow: hidden

  &-link:hover
    color: $primary-color
    opacity: 1.0

.link-active
  font-weight: 500
  opacity: 1.0
</style>