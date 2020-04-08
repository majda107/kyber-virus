<template>
  <div class="container">
    <input v-model="search" value="Czechia"/>
    <button v-on:click="clicked">Click</button>
    <div v-if="country != null">
      <CountryStats v-for="stat in country.response" v-bind:key="stat.country" v-bind:stats="stat" />
    </div>
  </div>
</template>

<script>
import CovidService from "../services/CovidService";

import CountryStats from "./CountryStats";

export default {
  name: "Display",
  data: function() {
    return {
      country: null,
      search: ""
    };
  },
  components: {
    CountryStats
  },
  methods: {
    clicked() {
      // CovidService.getCountries().then(() => {

      // })

      CovidService.queryStatistics(this.search).then(data => {
        this.country = data;
      });
    }
  }
};
</script>