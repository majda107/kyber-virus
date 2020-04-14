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
    row-gap: 20px

    &-image
        grid-area: image
        width: 300px

    &-header
        grid-area: header
        text-align: left
        font-size: 2.2rem

    &-text
        grid-area: text
        text-align: left
        justify-self: flex-start
        color: #8C8C8C
        font-size: 1.4rem
        font-weight: 500

@media screen and ( max-width:  1100px)
    .block-image
        width: 280px

@media screen and ( max-width: 900px)
    .block-image
        width: 200px

@media screen and (max-width: 600px)
  .block
    grid-template-areas: 'image' 'header' 'text'
    column-gap: 20px

    &-image
      width: 160px

    &-header
      font-size: 1.6rem
</style>