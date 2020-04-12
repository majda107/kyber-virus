<template>
  <div class="search-containter">
    <div class="search">
      <div class="search-input">
        <Autocomplete v-bind:collection="getCountries" :value.sync="city" />
      </div>
      <div class="search-country">
        <CountryStats v-bind:stats="data"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Autocomplete from "../components/Autocomplete";
import CountryStats from "../components/CountryStats"

export default {
  name: "SearchView",
  components: {
    Autocomplete,
    CountryStats
  },
  props: {},
  data: () => {
    return {
      city: ""
    };
  },
  computed: {
    ...mapGetters(["getCountries", "getCountryStatistics"]),
    data: function() {
      if(this.city == "") return null
      return this.getCountryStatistics(this.city)
    }
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
  padding-top: 100px

  &-input
    padding: 60px

  &-country
    margin-left: auto
    margin-right: auto
    max-width: 700px
</style>
