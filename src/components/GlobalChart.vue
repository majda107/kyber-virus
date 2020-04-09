<template>
  <div class="containter">
    <!-- <GChart type="GeoChart" :data="getGlobalChart" :options="{ displayMode: 'text' }"/> -->
    <GChart
      type="GeoChart"
      :data="getGlobalChart"
      :options="{  colorAxis: {colors: ['#ef962d', '#363636']},
          datalessRegionColor: '#faf4f4',
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