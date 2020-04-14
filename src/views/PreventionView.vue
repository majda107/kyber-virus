<template>
  <div class="prevention-container">
    <div class="prevention-background"></div>
    <div class="overlap">
      <div class="landing">
        <div class="landing-highlight">
          <div class="landing-highlight-banner"></div>
          <div class="landing-highlight-header">
            <div class="landing-highlight-header-bar"></div>
            <h1>Jak se chránit?</h1>
          </div>
        </div>
        <div class="landing-text">
          <p>Sicezatím nemáme lék proti koronaviru, je však stále možné chránit sebe a naše okolí... </p>
        </div>
      </div>
      <div class="prevention">
        <div class="prevention-block" v-for="article in articles" :key ="article.key">
          <PhotoBlock
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoBlock from "../components/blocks/PhotoBlock";

export default {
  name: "PreventionView",
  components: {
    PhotoBlock
  },
  data: () => {
    return {
      articles: [
        { image: 'hands.jpg', header: 'Mytí rukou', text: "Tím, že si budete mít ruce pravidelně a delší dobu, můžete zamezit přenosu nákazy.<br/><br/>Ruce si myjte alespoň jednu minutu, ideálně antibakteriálními přípravky / přípravky s obsahem alkoholu." },
        { image: 'distance.jpg', header: 'Dodržujte odstup', text: "Je těžké nestýkat se s námi blízkymi, ale tím, že nějako udobu omezíte kontakt s ostatními se můžeme zbavit viru úplně. <br/><br/> V případech, kde se ostatním osobám nelze vyhnout úplně je dobré zachovat vzdálenost do dvou metrů." }, 
        { image: 'veil.jpg', header: 'Noste roušky', text: "Když budete nosit roušku, chráníte nejen sebe, ale i ostatní... <br/><br/> Pokud nemáte přístup k roušce, můžete využít šátku, trička nebo jakéhokoliv kusu látky. Látku po každém použítí vyžehlete." },
        { image: 'home.jpg', header: 'Zůstaňte doma', text: "Nechoďte ven, pokud to není nutné. <br/><br/> Do obchodů chodtě pouze, když to je nezbytné a snažte se vyhýbat přímemu kontaktu. Noste roušku a ochranné rukavice, po příchodu domů si ihned umyjte ruce a mezitím neprovádějte kontakt s dalšími věcmi." }
      ]
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/mixins'
@import '../../sass/abstracts/variables'

.prevention-background
  position: absolute
  height: 100vh
  background-image: url('../assets/prevention_t.png')
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
  grid-area: landing

  &-text
    p
      font-size: 1.6rem
      font-weight: 500
      color: #8C8C8C
      padding: 60px
      text-align: left
      line-height: 2.4rem

  &-highlight:hover
    height: 740px

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


.overlap
  display: grid
  grid-template-rows: auto 100px auto
  grid-template-areas: 'landing' 'landing' 'prevention'
  grid-template-columns: 100%
  padding-bottom: 160px

.prevention
  z-index: 10000
  grid-area: prevention
  grid-row: 2/4
  display: grid
  grid-template-columns: 35% 1fr
  row-gap: 80px
  padding-left: 100px
  padding-right: 100px

  &-block
    grid-column: 2/3

  &-block:nth-child(even)
    grid-column: 1/3

@media screen and ( max-width: 1100px )
  .landing
    grid-template-columns: 90%

  .prevention
    grid-row: 3/4
    grid-template-columns: 20% 1fr
    padding-left: 60px
    padding-right: 60px

@media screen and ( max-width: 900px )
  .landing
    &-highlight
      height: 400px

    .landing-highlight-header
      column-gap: 10%
      h1
        font-size: 3.2rem

  .prevention
    grid-template-columns: 1fr
    padding-left: 40px
    padding-right: 40px

    &-block
      grid-column: 1/2
</style>
