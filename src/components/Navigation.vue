<template>
  <div class="navigation-container" v-bind:class="{ activebackground: open }">
    <div class="collapse" v-on:click="handleOpen">
      <div class="collapse-burger">
        <div class="collapse-burger-bar"></div>
        <div class="collapse-burger-bar"></div>
        <div class="collapse-burger-bar"></div>
      </div>
    </div>
    <div class="navigation" v-bind:class="{ active: open }">
      <router-link to="/home" draggable="false" class="navigation-link">HOME</router-link>
      <router-link to="/search" draggable="false" class="navigation-link">SEARCH</router-link>
      <router-link to="/global" draggable="false" class="navigation-link">GLOBAL</router-link>
      <router-link to="/prevention" class="navigation-link">PREVENTION</router-link>
    </div>
    <div class="kyberna">
      <span class="kyberna-text">Kyberna</span>
      <img src="../assets/kyberna.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      open: false
    };
  },
  methods: {
    handleOpen: function() {
      this.open = !this.open;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/variables'

.navigation-container
  display: grid
  justify-content: center
  justify-items: center
  align-items: center
  grid-template-columns: 1fr auto 1fr
  grid-template-areas: 'collapse navigation kyberna'
  z-index: 1000

.collapse
  display: none
  display: flex
  justify-content: center
  align-items: center
  justify-self: flex-start
  grid-area: collapse

  &-burger
    width: 50%
    height: 40%
    display: flex
    flex-flow: column
    justify-content: space-between

    &-bar
      width: 100%
      background-color: $white-color
      opacity: 0.4
      height: 5px
      transition: width 500ms

    &-bar:nth-of-type(1)
      width: 60%

    &-bar:nth-of-type(3)
      width: 80%

.navigation
  padding: 30px
  display: grid
  grid-auto-flow: column
  column-gap: 60px
  grid-area: navigation

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

.kyberna
  justify-self: flex-end
  padding-right: 40px
  font-size: 1.8rem
  font-weight: 500
  grid-area: kyberna
  display: flex
  align-items: center

  &-text
    opacity: 0.5
    padding-right: 12px
    padding-top: 10px
    color: #ECECEC

  img
    height: 30px

@media screen and (max-width: 1400px)
  .navigation-container
    grid-template-columns: 0px 1fr auto

  .navigation
    justify-self: flex-start

@media screen and ( max-width: 1200px)
  .navigation-container
    grid-template-columns: auto 1fr
    transition: background 500ms
    grid-template-areas: 'collapse kyberna' 'navigation navigation'

  .collapse
    height: 80px
    width: 100px

  .navigation
    height: 0
    overflow: hidden
    padding: 0
    align-items: center
    grid-auto-flow: row
    transition: height 500ms, opacity 500ms
    opacity: 0
    justify-self: center

  .active
    height: 400px
    opacity: 1.0
    padding-bottom: 60px

  .activebackground
    background-color: black

    .collapse-burger
      &-bar
        width: 100%

      &-bar:nth-of-type(2)
        width: 80%
</style>