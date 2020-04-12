<template>
  <div class="containter">
    <!-- <GChart type="GeoChart" :data="getGlobalChart" :options="{ displayMode: 'text' }"/> -->
    <GChart
      type="GeoChart"
      :data="getGlobalChart"
      :settings="{packages: ['geochart'], mapsApiKey: ''}"
      :options="{  colorAxis: {colors: ['#FF9900', '#FF3D00']},
          datalessRegionColor: '#FFDAA3',
          backgroundColor: 'transparent',
          defaultColor: '#f5f5f5'}"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

import { mapGetters } from "vuex";

export default {
  name: "GlobalChart",
  components: {
    GChart
  },
  computed: {
    ...mapGetters(["getGlobalChart"])
  }
};
</script>

<style lang="sass" scoped>
.containter
  width: 100%
</style>