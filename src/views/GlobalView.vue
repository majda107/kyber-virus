<template>
  <div class="global-containter">
    <div class="global">
      <GlobalChart />
    </div>
  </div>
</template>

<script>
import GlobalChart from "../components/GlobalChart";

export default {
  name: "HomeView",
  components: {
    GlobalChart
  },
  props: {}
};
</script>

<style lang="sass" scoped>
.global-ontainter
  width: 100%

.global
  width: 64%
  padding-top: 160px
  margin-left: auto
  margin-right: auto
</style>
