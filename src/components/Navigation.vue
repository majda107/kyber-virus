<template>
  <div class="containter">
    <div class="navigation">
      <span class="navigation-link">Home</span>
      <span class="navigation-link">Global</span>
      <span class="navigation-link">Search</span>
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
    background-color: $secondary-color
    display: grid
    justify-content: center

.navigation
    padding: 10px
    display: grid
    grid-auto-flow: column
    column-gap: 20px

    &-link
        color: $white-color
        font-weight: 400
        font-size: 1.1rem

</style>