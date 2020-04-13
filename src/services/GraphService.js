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

    buildData(pastEntries, path, label = "", color = "#FFFFFF", fill = true) {
        let paths = path.split('.')

        let data = this.dataBase()
        data.datasets[0].label = label
        data.datasets[0].backgroundColor = color
        data.datasets[0].borderColor = color
        data.datasets[0].fill = fill

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

                    datas[template.path] = this.buildData(past, template.path, template.label, template.color, template.fill == undefined ? true : template.fill)

                    if(template.additional == undefined) continue

                    for(let additional of template.additional) {
                        let data = this.buildData(past, additional.path, additional.label, additional.color, additional.fill == undefined ? true : additional.fill)

                        datas[template.path].datasets.push(data.datasets[0])
                    }
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

        let templates = [
            { path: "cases.active", label: "Active cases", color: "rgba(255, 255, 255, 0.35)" },
            { path: "deaths.total", label: "Total deaths", color: "rgba(255, 25, 25, 0.35)" }
          ]

        return new Promise(resolve => {
            this.mapPasts(country, cap, templates).then(datas => {
                let data = datas["cases.active"]
                data.datasets.push(datas["deaths.total"].datasets[0])

                resolve(data)
            }) 
        })
        

        // 

        // return datas["cases.active"]
        // return this.mapPast(country, cap, "cases.active", "Active cases", "rgba(255, 255, 255, 0.35)")
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
                    backgroundColor: ["rgba(255,140,0, 0.4)", "rgba(255, 255, 255, 0.55)", "rgba(255, 25, 25, 0.55)", "rgba(110, 230, 110, 0.4)"],
                    borderColor: ["rgba(255,140,0, 0.8)", "rgba(255, 255, 255, 0.55)", "rgba(255, 25, 25, 0.95)", "rgba(110, 230, 110, 0.9)"],
                    borderWidth: [2, 2, 2, 2],
                    borderAlign: 'inner',
                    // borderColor: ["#1B1B25", "#1B1B25", "#1B1B25", "#1B1B25"],
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