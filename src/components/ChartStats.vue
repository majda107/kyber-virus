<template>
  <div class="detailed-container">
    <div class="detailed">
      <div class="detailed-chart">
        <LineChart :chart-data="infectedData" />
      </div>
      <div class="detailed-chart">
        <DoughnutChart :chart-data="pieData" />
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
      history: null
    };
  },
  computed: {
    ...mapGetters(["getCountryStatistics"]),
    infectedData: function() {
      return GraphService.mapInfected(this.history, 50);
    },

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
    grid-template-columns: 45% 45%
    column-gap: 10%

    &-chart
        padding: 20px
        background-color: $chart-color
        border-radius: 8px
        @include elevation()
        height: 400px

@media screen and ( max-width: 1100px )
    .detailed
        grid-template-columns: 100%
</style>