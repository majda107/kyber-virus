// import axios from 'axios'
import CovidService from '../../services/CovidService'

const state = {
    statistics: null
}

const getters = {
    getStatictics: (state) => state.statistics,
    getCountryStatistics: (state) => (query) => {
        // alert(`getting country ${query}`)
        // console.log(state.statistics)
        // console.log(query)
        query = query.toLowerCase()
        let item = state.statistics.find(entry => {
            // console.log(entry.country)
            return entry.country.toLowerCase().includes(query)
        })
        console.log(item)
        // console.log(state.statistics[0])
        return item
    },

    // getCountries: (state) => (query) => {

    // }

    getCountries: (state) => {
        if(state.statistics == null) return []
        return state.statistics.map(entry => entry.country)
    },

    getGlobalChart: (state) => {
        if(state.statistics == null) return ['Country', 'Popularity']

        // let exclude = ["World", "All", "USA"]
        let exclude = ["World", "All"]
        let replace = { "USA": "United States", "UK": "United Kingdom"}

        let chart = state.statistics.map(entry => [replace[entry.country] == undefined? entry.country : replace[entry.country], entry.cases.active]).filter(entry => !exclude.includes(entry[0]))
        chart.unshift([ 'Country', 'Popularity'])

        console.log(chart)
        return chart
    }
}

const actions = {
    fetchStatistics({ commit }) {
        console.log('[Covid module] Fetching statistics')
        CovidService.getStaticstics().then(data => {
            commit('setStatistics', data.response)
        })
    }
}

const mutations = {
    setStatistics: (state, data) => { state.statistics = data }
}

export default {
    state,
    getters,
    actions,
    mutations
}