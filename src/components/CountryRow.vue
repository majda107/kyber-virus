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
// import { GChart } from "vue-google-charts";

import CovidService from "../services/CovidService";

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
      if (this.history == null) return [];

      let data = {
        labels: [],
        datasets: [
          {
            label: "Active infections",
            backgroundColor: "#FF0000",
            data: []
          }
        ]
      };

      let counter = 0;
      for (let entry of this.history) {
        data.labels.push(counter++);
        data.datasets[0].data.push(entry.cases.active);

        if (counter > 50) break;
      }
      // data.datasets[0].data = this.history.map((entry) => {
      //   return entry.cases.active;
      // });

      // data.datasets = data.datasets.slice(1, 10);

      return data;
    },

    pieData: function() {
      let data = {
        labels: [],
        datasets: [
          {
            backgroundColor: ["#FF0000", "#00FF00", "#AAAAFF", "#FFFF00"],
            borderWidth: [3, 3, 3, 3],
            borderColor: ["#1B1B25", "#1B1B25", "#1B1B25", "#1B1B25"],
            label: "Status",
            data: []
          }
        ]
      };

      let entries = this.getCountryStatistics(this.name).cases;
      for (let entry in entries) {
        if (entry == "total") continue;
        data.labels.push(entry);
        data.datasets[0].data.push(parseInt(entries[entry]));
        // data.datasets.push({ label:entry, data: [parseInt(entries[entry])] })
      }

      return data;
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

    &-graph1
      grid-area: graph1

    &-graph2
      grid-area: graph2

@media screen and ( max-width: 1480px )
  .row
    grid-template-areas: 'stats' 'graph2' 'graph1'
    grid-template-columns: 100%
    grid-template-rows: auto 400px 400px
    row-gap: 80px
  
</style>