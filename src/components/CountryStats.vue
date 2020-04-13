<template>
  <div class="container">
    <div class="stats" v-if="stats != null">
      <h2 class="stats-name">{{ stats.country }}</h2>
      <div class="stats-cases">
        <span class="stats-cases-header">Cases</span>

        <span class="stats-cases-label">Today</span>
        <span class="stats-cases-value">{{ stats.cases.new }}</span>
        <span class="stats-cases-label">Active</span>
        <span class="stats-cases-value">{{ stats.cases.active }}</span>
        <span class="stats-cases-label">Critical</span>
        <span class="stats-cases-value">{{ stats.cases.critical }}</span>
        <span class="stats-cases-label">Recovered</span>
        <span class="stats-cases-value">{{ stats.cases.recovered }}</span>
        <span class="stats-cases-label">Total</span>
        <span class="stats-cases-value">{{ stats.cases.total }}</span>
      </div>
      <div class="stats-deaths">
        <span class="stats-deaths-header">Deaths</span>

        <span class="stats-deaths-label">Today</span>
        <span class="stats-deaths-value">{{ stats.cases.new }}</span>
        <span class="stats-deaths-label">Total</span>
        <span class="stats-deaths-value">{{ stats.deaths.total }}</span>
      </div>

      <div class="stats-tests">
        <span class="stats-tests-header">Tests</span>

        <span class="stats-tests-label">Total</span>
        <span class="stats-tests-value">{{ stats.tests.total}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryStats",
  props: ["stats"],
  methods: {}
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/variables'

.container
    // background-color: $dark-color
    border-radius: 10px

.stats
    display: grid
    padding: 20px
    // justify-content: center
    grid-template-areas: 'name name' 'cases deaths' 'cases tests' 
    grid-template-rows: auto auto auto
    column-gap: 80px
    row-gap: 40px

    &-name
        font-size: 1.9rem
        grid-area: name

    &-cases, &-deaths, &-tests
        display: grid
        grid-template-columns: 1fr 1fr
        row-gap: 3px

        &-header
            grid-column-start: 1
            grid-column-end: 3
            justify-self: flex-start
            font-size: 1.7rem
            font-weight: 400

        &-label
            justify-self: flex-start
            font-weight: 100
            font-size: 1.1rem

        &-value
            justify-self: flex-end
            font-weight: 500
            color: $primary-color
            font-size: 1.1rem

    &-cases
        grid-area: cases

    &-deaths
        grid-area: deaths
    
    &-tests
        grid-area: tests

@media screen and ( max-width: 600px )
  .stats
    grid-template-areas: 'name' 'cases' 'deaths' 'tests'
    grid-template-columns: 100%
    justify-content: center
    padding-left: 60px
    padding-right: 60px

</style>

