<template>
  <div class="container">
    <div class="stats" v-if="stats != null">
      <h2 class="stats-name">{{ stats.country }}</h2>
      <div class="stats-cases">
        <span class="stats-cases-header">Cases</span>

        <span class="stats-cases-label">Today</span>
        <span class="stats-cases-value new">{{ stats.cases.new }}</span>
        <span class="stats-cases-label">Active</span>
        <span class="stats-cases-value active">{{ stats.cases.active }}</span>
        <span class="stats-cases-label">Critical</span>
        <span class="stats-cases-value critical">{{ stats.cases.critical }}</span>
        <span class="stats-cases-label">Recovered</span>
        <span class="stats-cases-value recovered">{{ stats.cases.recovered }}</span>
        <span class="stats-cases-label">Total</span>
        <span class="stats-cases-value total">{{ stats.cases.total }}</span>
      </div>
      <div class="stats-deaths">
        <span class="stats-deaths-header">Deaths</span>

        <span class="stats-deaths-label">Today</span>
        <span class="stats-deaths-value">{{ stats.deaths.new }}</span>
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

        // ses", color: "rgba(70, 200, 70)", fill: false , additional: [{ path: "deaths.total", label: "Total deaths", color: "rgba(200, 70, 70)", fill: false }] },
        // { path: "cases.new", label: "New cases", color: "rgba(255,140,0, 0.4)" },
        // { path: "tests.total", label: "Total tests", color: "rgba(50, 50, 250, 0.3)" },
        // { path: "cases.critical", label: "Critical cases", color: "rgba(250, 50, 50, 0.3)"
.active
  color: rgba(210, 210, 210, 0.7)

.critical
  color: rgba(250, 70, 70, 0.85)

.recovered
  color: rgba(120, 250, 120, 0.6)

.total
  color: rgba(120, 120, 250, 0.8)

@media screen and ( max-width: 600px )
  .stats
    grid-template-areas: 'name' 'cases' 'deaths' 'tests'
    grid-template-columns: 100%
    justify-content: center
    // padding-left: 20px
    // padding-right: 60px
</style>

