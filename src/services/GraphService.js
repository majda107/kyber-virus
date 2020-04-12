export default {
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

        if(history == null) return data

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

        for (let entry in stats.cases) {
            if (entry == "total") continue;
            data.labels.push(entry);
            data.datasets[0].data.push(parseInt(stats.cases[entry]));
        }

        return data;
    }
}