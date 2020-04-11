<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
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

// import { Bar } from 'vue-chartjs'

// export default {
//   extends: Bar,
//   data: () => ({
//     chartdata: {
//       labels: ['January', 'February'],
//       datasets: [
//         {
//           label: 'Data One',
//           backgroundColor: '#f87979',
//           data: [40, 20]
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false
//     }
//   }),

//   mounted () {
//     this.renderChart(this.chartdata, this.options)
//   }
// }
</script>

<style lang="sass" scoped>
div
    height: 100%
    width: 100%
    canvas
        height: 100%
        width: 100%
</style>