<template>
  <div class="row">
    <div v-if="country != null" class="row-graph1">
      <div class="row-chart">
        <LineChart :chart-data="infectedData" />
      </div>
    </div>
    <div v-if="country != null" class="row-graph2">
      <div class="row-chart">
        <DoughtnutChart :chart-data="pieData" />
      </div>
    </div>
    <div v-if="country != null" class="row-stats">
      <CountryStats v-bind:stats="country" />
    </div>
  </div>
</template>

<script>
import CountryStats from "./CountryStats";
import LineChart from "./LineChart";
import DoughtnutChart from "./DoughnutChart";

import CovidService from "../services/CovidService";
import GraphService from "../services/GraphService"

import { mapGetters } from "vuex";

export default {
  name: "Display",
  props: ["name"],
  components: {
    CountryStats,
    // GChart,
    LineChart,
    DoughtnutChart
  },
  data: function() {
    return {
      history: null
    };
  },
  methods: {
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },
  computed: {
    ...mapGetters(["getCountryStatistics"]),
    country: function() {
      return this.getCountryStatistics(this.name);
    },

    infectedData: function() {
      return GraphService.mapInfected(this.history, 20)
    },

    pieData: function() {
      return GraphService.mapPieData(this.country)
    }
  },
  created: function() {
    CovidService.queryHistory(this.name).then(data => {
      this.history = data.response;
    });
  }
};
</script>

<style lang="sass" scoped>

@import '../../sass/abstracts/variables'
@import '../../sass/abstracts/mixins'

.row
  display: grid
  grid-auto-flow: row
  grid-template-areas: 'graph1 graph2 stats'
  column-gap: 60px
  align-items: center
  justify-content: center
  width: 100%
  grid-template-columns: 30% 30% 1fr
  grid-template-rows: 300px

  &-chart
    height: 280px
    padding: 24px
    background-color: $chart-color
    border-radius: 6px
    @include elevation()

  &-stats
    grid-area: stats
    max-width: 700px
    justify-self: center

  &-graph1
    grid-area: graph1

  &-graph2
    grid-area: graph2

@media screen and ( max-width: 1480px )
  .row
    grid-template-areas: 'stats' 'graph2' 'graph1'
    grid-template-columns: 100%
    grid-template-rows: auto 400px 400px
    row-gap: 60px
  
</style>