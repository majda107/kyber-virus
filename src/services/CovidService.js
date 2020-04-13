const axios = require('axios')

const host = "covid-193.p.rapidapi.com"
const endpoint = `https://${host}`
const key = "df66e76d8dmsh899cee07b713c7dp180be6jsnd097587cc9aa"

export default {
    getHeaders() {
        return {
            "x-rapidapi-host": host,
            "x-rapidapi-key": key
        }
    },

    callEndpoint(path) {
        return new Promise((resolve, reject) => {
            axios.get(`${endpoint}/${path}`, { headers: this.getHeaders() }).then(
                response => {
                    console.log(response.data)
                    resolve(response.data)
                },
                error => {
                    reject(error)
                }
            )
        })
    },

    getCountries() {
        return this.callEndpoint("countries")
    },

    getStaticstics() {
        return this.callEndpoint("statistics")
    },

    queryStatistics(country) {
        return this.callEndpoint(`statistics?country=${country}`)
    },

    queryHistory(country) {
        return this.callEndpoint(`history?country=${country}`)
    },

    queryPast(country, cap = 10) {
        let date = new Date()
        let promises = []
        for(let i = 0; i < cap; i++)
        {
            let iso = date.toISOString().split('T')[0]
            promises.push(this.callEndpoint(`history?country=${country}&day=${iso}`))
            date = new Date(date.getTime() - 24*60*60*1000)
        }

        return new Promise((resolve) => {
            let result = {}
            Promise.all(promises).then(values => {
                for(let value of values) {
                    result[value.parameters.day] = value.response[0]
                }

                resolve(result)
            })
        }) 
    }
}