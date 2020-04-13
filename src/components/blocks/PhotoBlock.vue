<template>
  <div class="block-container">
    <div class="block">
      <img class="block-image" v-bind:src="require(`@/assets/${article.image}`)" />
      <h2 class="block-header">{{ article.header }}</h2>
      <p class="block-text">{{ article.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PhotoBlock",
  props: ["article"]
};
</script>

<style lang="sass" scoped>
.block
    display: grid
    grid-template-areas: 'image header' 'image text' '. text'
    grid-template-rows: auto auto auto
    grid-template-columns: auto 1fr
    column-gap: 60px

    &-image
        grid-area: image
        width: 300px

    &-header
        grid-area: header
        text-align: left

    &-text
        grid-area: text
        text-align: left
        justify-self: flex-start

</style>