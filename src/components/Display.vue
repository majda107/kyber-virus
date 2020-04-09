<template>
  <div class="container">
    <!-- <input v-model="search" value="Czechia"/> -->
    <Autocomplete v-bind:collection="getCountries" :value.sync="search"></Autocomplete>
    <div>
      <button v-on:click="clicked">Click</button>
    </div>
    <div v-if="country != null" class="stats">
      <CountryStats v-bind:stats="country" />
    </div>
  </div>
</template>

<script>
// import CovidService from "../services/CovidService";

import Autocomplete from "./Autocomplete";
import CountryStats from "./CountryStats";

import { mapGetters } from "vuex";

export default {
  name: "Display",
  data: function() {
    return {
      country: null,
      search: ""
    };
  },
  components: {
    CountryStats,
    Autocomplete
  },
  computed: {
    ...mapGetters(["getCountryStatistics", "getCountries"])
  },
  methods: {
    clicked() {
      //   alert(this.search);
      this.country = this.getCountryStatistics(this.search);
    }
  }
};
</script>

<style lang="sass" scoped>

.container
  display: grid
  grid-auto-flow: row
  row-gap: 20px
  justify-content: center

</style>