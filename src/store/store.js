import Vue from 'vue'
import Vuex from 'vuex'

import covid from './modules/covid'

import 'es6-promise/auto'

// LOAD VUEX
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        covid
    }
})