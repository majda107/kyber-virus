<template>
  <div class="global-containter">
    <div class="global-header">
      <h1>Global stats</h1>
    </div>
    <div class="global">
      <GlobalChart />
    </div>
    <div class="global-charts" v-if="chartDatas != null">
      <div class="global-charts-fetching" v-if="fetching">Fetching...</div>
      <div class="global-charts-chart" v-for="(data, index) in chartDatas" :key="`chart-${index}`">
        <LineChart :chart-data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import GlobalChart from "../components/GlobalChart";
import LineChart from "../components/LineChart";
import GraphService from "../services/GraphService";

export default {
  name: "GlobalView",
  components: {
    GlobalChart,
    LineChart
  },
  data: () => {
    return {
      chartDatas: null,
      fetching: false
    };
  },
  created: function() {
    this.fetching = true;

    let templates = [
      {
        path: "cases.recovered",
        label: "Recovered cases",
        color: "rgba(70, 200, 70)",
        fill: false,
        additional: [
          {
            path: "deaths.total",
            label: "Total deaths",
            color: "rgba(200, 70, 70)",
            fill: false
          }
        ]
      },
      {
        path: "cases.total",
        label: "Total cases",
        color: "rgba(200, 200, 200, 0.4)",
        fill: true
      }
    ];

    GraphService.mapPasts("Czechia", 20, templates).then(datas => {
      this.fetching = false;
      this.chartDatas = datas;
    });
  }
};
</script>

<style lang="sass" scoped>
.global-containter
  width: 100%

.global
  width: 64%
  padding-top: 60px
  margin-left: auto
  margin-right: auto

.global-header
  padding-top: 160px

  h1
    font-weight: 500
    opacity: 0.5
    font-size: 2.4rem

.global-charts
  display: grid
  grid-template-columns: 100%

  &-chart
    height: 300px
    padding: 80px

@media screen and ( max-width: 1000px )
.global-charts
  padding-top: 100px
  &-chart
    padding: 20px
  
</style>

