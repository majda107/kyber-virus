<template>
  <div class="search-containter">
    <div class="search">
      <div class="search-input">
        <Autocomplete v-bind:collection="getCountries" :value.sync="country" />
      </div>
      <div class="search-country">
        <CountryStats v-bind:stats="data"/>
      </div>
      <div v-if="data != null" class="search-graphs">
        <ChartStats :country="country"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CovidService from '../services/CovidService'

import Autocomplete from "../components/Autocomplete"
import CountryStats from "../components/CountryStats"
import ChartStats from "../components/ChartStats"

export default {
  name: "SearchView",
  components: {
    Autocomplete,
    CountryStats,
    ChartStats
  },
  props: {},
  data: () => {
    return {
      country: "",
    };
  },
  computed: {
    ...mapGetters(["getCountries", "getCountryStatistics"]),
    data: function() {
      if(this.country == "") return null
      return this.getCountryStatistics(this.country)
    }
  },
  created: function() {
    console.log("CALLING FOR HISTORY....")
    CovidService.queryPast("czechia", 20).then((values) => {
      console.log(values)
    })
  }
};
</script>

<style lang="sass" scoped>
.search
  background-image: url('../assets/search.png')
  width: 100%
  min-height: 100vh
  background-size: cover

</style>

<style lang="sass" scoped>
.search

  &-input
    padding-top: 140px
    padding-bottom: 40px

  &-country
    margin-left: auto
    margin-right: auto
    max-width: 700px
    padding-bottom: 60px
</style>
