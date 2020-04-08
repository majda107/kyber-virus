<template>
    <div class="container">
        <div class="stats">
            <h2 class="stats-name">{{ stats.country }}</h2>
            Cases
            <div class="stats-cases">
                <span class="stats-cases-new">Today {{ stats.cases.new }}</span>
                <span class="stats-cases-active">Active {{ stats.cases.active }}</span>
                <span class="stats-cases-critical">Critical {{ stats.cases.critical }}</span>
                <span class="stats-cases-recovered">Recovered {{ stats.cases.recovered }}</span>
                <span class="stats-cases-total">Total {{ stats.cases.total }}</span>
            </div>

            Deaths
            <div class="stats-deaths">
                <span class="stats-deaths-new">Today {{ stats.cases.new }}</span>
                <span class="stats-deaths-total">Total  {{ stats.cases.total }}</span>
            </div>

            Tests
            <div class="stats-tests">
                <span class="stats-tests-total">{{ stats.tests.total }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryStats",
    props: [
        'stats'
    ],
    methods: {
    }
}
</script>