<template>
  <div class="detailed-container">
    <div class="detailed">
      <div class="detailed-chart">
        <LineChart v-if="infectedData != null" :chart-data="infectedData" />
        <h2 v-else>Fetching history...</h2>
      </div>
      <div class="detailed-chart">
        <DoughnutChart :chart-data="pieData" />
      </div>
      <div class="detailed-chart" v-for="(data, index) in mixedData" :key="`graph-${index}`">
        <LineChart v-if="data != null" :chart-data="data" />
        <h2 v-else>Fetching history...</h2>
        <!-- {{ data }} -->
      </div>
    </div>
  </div>
</template>

<script>
import CovidService from "../services/CovidService";
import GraphService from "../services/GraphService";

import { mapGetters } from "vuex";

import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";

export default {
  name: "ChartStats",
  props: ["country"],
  components: {
    LineChart,
    DoughnutChart
  },
  data: () => {
    return {
      history: null,
      infectedData: null,
      mixedData: null
    };
  },
  computed: {
    ...mapGetters(["getCountryStatistics"]),
    // infectedData: function() {
    //   return GraphService.mapInfected(this.history, 50);
    // },

    pieData: function() {
      return GraphService.mapPieData(this.getCountryStatistics(this.country));
    }
  },
  watch: {
    country: function(val) {
      console.log("country changed...");
      CovidService.queryHistory(val).then(data => {
        this.history = data.response;
      });

      GraphService.mapInfectedPast(val, 20).then(result => {
        this.infectedData = result;
      });

      let templates = [
        { path: "cases.active", label: "Active burecs", color: "#FF0000" },
        { path: "deaths.total", label: "Total deaths", color: "#00FF00" },
        { path: "cases.recovered", label: "Recovered cases", color: "#00FF00" },
        { path: "cases.new", label: "New cases", color: "#FF0000" }
      ]
      GraphService.mapPasts(val, 20, templates).then(datas => {
        this.mixedData = datas
      })
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/variables'
@import '../../sass/abstracts/mixins'

.detailed-container
  width: 80%
  margin-left: auto
  margin-right: auto

.detailed
  display: grid
  grid-template-columns: 47% 47%
  column-gap: 6%
  row-gap: 60px

  &-chart
    padding: 20px
    background-color: $chart-color
    border-radius: 8px
    height: 400px
    display: flex
    justify-content: center
    align-items: center
    @include elevation()

  h2
    color: $white-color
    opacity: 0.3
    font-size: 1.6rem
    font-weight: 500

@media screen and ( max-width: 1100px )
  .detailed
    grid-template-columns: 100%
</style>