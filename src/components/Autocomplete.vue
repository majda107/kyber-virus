<template>
  <div class="container">
    <form class="form">
      <input
        class="input"
        type="text"
        v-model="selection"
        @input="inputUpdate"
        @keydown.enter="close"
        @keydown.down="down"
        @keydown.up="up"
      />
      <div class="suggestions">
        <ul v-if="open" class="suggestions-list" style="width:100%">
          <li
            v-on:click="clicked(index)"
            v-for="(suggestion, index) in matches"
            v-bind:key="suggestion"
            v-bind:class="{ 'active': index === selected }"
          >{{ suggestion }}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Autocomplete",
  props: ["collection", "value"],
  data: function() {
    return {
      open: false,
      selection: "",
      selected: 0
    };
  },
  computed: {
    matches() {
      if (this.value == "") return [];
      return this.collection.filter(str => {
        return str.toLowerCase().indexOf(this.value.toLowerCase()) >= 0;
      });
    }
  },
  methods: {
    inputUpdate() {
      this.open = true;
      this.selected = 0;

      //   this.value = this.selection;
      this.$emit("update:value", this.selection);
    },

    clicked(index) {
      this.selected = index;
      this.close();
    },

    close() {
      if (
        this.matches.length > 0 &&
        this.selected >= 0 &&
        this.selected < this.matches.length
      ) {
        console.log("closing")
        this.selection = this.matches[this.selected]
        this.$emit("update:value", this.matches[this.selected])
      }

      this.selected = 0
      this.open = false
    },

    closePanel() {
        this.open = false
    },

    up() {
      this.selected -= 1;
    },

    down() {
      this.selected += 1;
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../../sass/abstracts/variables'

.active 
    background-color: $primary-color
    font-weight: 500
    color: $dark-color !important
    

.container
    display: flex
    justify-content: center

.form
    position: relative
    
.input
    position: relative

.suggestions
    position: absolute
    width: 100%
    margin-top: 4px

    &-list
        // width: 60%
        background-color: $white-color
        -webkit-box-shadow: 10px 10px 45px 0px rgba(0,0,0,0.24)
        -moz-box-shadow: 10px 10px 45px 0px rgba(0,0,0,0.24)
        box-shadow: 10px 10px 45px 0px rgba(0,0,0,0.24)
        border-radius: 6px
        list-style-type: none
        width: 80%
        padding: 0
        margin: 0
        left: 0

        li
            border-radius: 4px
            padding: 8px !important
            color: $dark-color
            text-decoration: none

        li:hover
            color: $dark-color !important
            cursor: pointer
            font-weight: 500
            background-color: $primary-color

</style>