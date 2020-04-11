<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style lang="sass" scoped>
div
  height: 100%
  width: 100%
  canvas
    height: 100%
    width: 100%
</style>