import CovidService from './CovidService'

export default {
    dataBase() {
        return {
            labels: [],
            datasets: [
                {
                    data: []
                }
            ]
        }
    },

    buildData(pastEntries, path, label = "", color = "#FFFFFF") {
        let paths = path.split('.')

        let data = this.dataBase()
        data.datasets[0].label = label
        data.datasets[0].backgroundColor = color

        let added = false
        for (let date in pastEntries) {
            let value = pastEntries[date]
            for (let valuePath of paths) {
                if (value == undefined) continue
                value = value[valuePath]
            }

            if (value == undefined) continue

            data.labels.unshift(date)
            data.datasets[0].data.unshift(value)

            added = true
        }

        if(!added) return null
        return data
    },

    mapPast(country, cap = 20, path, label, color) {
        return new Promise((resolve, reject) => {
            if(country == "" || cap <= 0) reject()

            CovidService.queryPast(country, cap).then((past) => {
                let data = this.buildData(past, path, label, color)
                if(data == null) reject()

                resolve(data)
            })
        })
    },

    mapPasts(country, cap = 20, templates) {
        return new Promise((resolve, reject) => {
            if(country == "" || cap <= 0 || templates.length <= 0) reject()

            CovidService.queryPast(country, cap).then((past) => {
                let datas = { }
                for(let template of templates) {
                    if(template.path == undefined) continue

                    datas[template.path] = this.buildData(past, template.path, template.label, template.color)
                }

                resolve(datas)
            })
        })
    },

    mapInfectedPast(country, cap = 20) {
        // return new Promise((resolve) => {
        //     if (country == "") resolve(null)

        //     CovidService.queryPast(country, cap).then((past) => {
        //         let data = this.dataBase()
        //         data.datasets[0].label = "Active infections"
        //         data.datasets[0].backgroundColor = "rgba(255, 255, 255, 0.35)"

        //         data = this.buildData(past, "cases.active", "Active niggas", "#FF0000")
        //         // let added = false
        //         // for (let entry in past) {
        //         //     if (past[entry] == undefined) continue

        //         //     data.labels.unshift(entry)
        //         //     data.datasets[0].data.unshift(past[entry].cases.active)

        //         //     added = true
        //         // }

        //         // if (!added) resolve(null)
        //         resolve(data)
        //     })
        // })

        return this.mapPast(country, cap, "cases.active", "Active cases", "rgba(255, 255, 255, 0.35)")
    },

    mapInfected(history, cap = 50) {
        let data = {
            labels: [],
            datasets: [
                {
                    label: "Active infections",
                    backgroundColor: "#FF0000",
                    data: []
                }
            ]
        };

        if (history == null) return data

        let counter = 0;
        for (let entry of history) {
            data.labels.push(counter++);
            data.datasets[0].data.push(entry.cases.active);

            if (counter > cap) break;
        }

        return data;
    },

    mapPieData(stats) {
        let data = {
            labels: [],
            datasets: [
                {
                    backgroundColor: ["#FF0000", "#00FF00", "#AAAAFF", "#FFFF00"],
                    borderWidth: [3, 3, 3, 3],
                    borderColor: ["#1B1B25", "#1B1B25", "#1B1B25", "#1B1B25"],
                    label: "Status",
                    data: []
                }
            ]
        };

        if (stats == null) return data

        for (let entry in stats.cases) {
            if (entry == "total") continue;
            data.labels.push(entry);
            data.datasets[0].data.push(parseInt(stats.cases[entry]));
        }

        return data;
    }
}