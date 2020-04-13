<template>
  <div class="prevention-container">
    <div class="prevention-background"></div>
    <div class="landing">
      <div class="landing-highlight">
        <div class="landing-highlight-banner"></div>
        <div class="landing-highlight-header">
          <div class="landing-highlight-header-bar"></div>
          <h1>Jak se chránit?</h1>
        </div>
      </div>
      <div class="landing-text">
        <p>Sicezatím nemáme lék proti koronaviru, je však stále možné chránit sebe a naše okolí... blah blah blah packet tracer je sračka</p>
      </div>
    </div>
    <div class="prevention">
      <PhotoBlock :article="{ image: 'hands.jpg', header: 'Test header', text: 'One text nigga' }" />
    </div>
  </div>
</template>

<script>
import PhotoBlock from "../components/blocks/PhotoBlock";

export default {
  name: "PreventionView",
  components: {
    PhotoBlock
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/mixins'
@import '../../sass/abstracts/variables'

.prevention-background
  position: absolute
  height: 100vh
  background-image: url('../assets/prevention.jpg')
  background-size: cover
  background-position: center center
  opacity: 0.05
  width: 100%
  z-index: -10

.landing
  width: 98%
  margin-left: auto
  margin-right: auto
  display: grid
  grid-template-columns: 45% 1fr
  align-items: center

  &-text
    p
      font-size: 1.6rem
      font-weight: 500
      color: #8C8C8C
      padding: 60px
      text-align: left
      line-height: 2.4rem

  &-highlight:hover
    height: 760px

    &-banner
      @include elevation-hover()

  &-highlight
    width: 100%
    display: grid
    grid-template-areas: '. banner' 'text banner' '. banner'
    grid-template-columns: 1fr 55%
    grid-template-rows: 40% auto 1fr
    transition: height 500ms
    overflow: hidden
    height: 700px
    animation: slide-up 0.4s ease

    &-header
      grid-area: text
      grid-column: 1/3
      z-index: 100
      display: grid
      grid-auto-flow: column
      padding: 10px
      column-gap: 100px

      h1
        font-size: 4.8rem
        max-width: 400px
        text-align: left

      &-bar
        height: 100%
        width: 7px
        background-color: #C57125
    
    &-banner
      grid-area: banner
      width: 100%
      background-color: #61360F
      opacity: 0.6
      @include elevation()

@keyframes slide-up
  0%
    transform: translateY(40px)
  100%
    transform: translateY(0px)


.prevention

@media screen and ( max-width: 1100px )
  .landing
    grid-template-columns: 90%

@media screen and ( max-width: 900px )
  .landing
    &-highlight
      height: 400px

    .landing-highlight-header
      column-gap: 10%
      h1
        font-size: 3.2rem

</style>
