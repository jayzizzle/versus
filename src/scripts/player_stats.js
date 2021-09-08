class PlayerStats {
    constructor(playerSelect, artists) {
        this.playerSelect = playerSelect;
        this.artists = artists;
        this.playerChart = document.getElementById('chart').getContext('2d');
        this.chart = undefined;

        const data = this.setData();
        const config = this.setConfig(data);
        this.buildChart(config);
    }

    convertLeftData(playerLeftData) {
        let convertedData = [];
        playerLeftData.forEach(ele => convertedData.push(ele * -1));
        return convertedData;
    }

    setLeftValues(playerLeft = this.playerSelect.leftSelection) {
        return this.convertLeftData(Object.values(playerLeft.stats));
    }

    setRightValues(playerRight = this.playerSelect.rightSelection) {
        return Object.values(playerRight.stats);
    }
    
    setData(
        playerLeft = this.playerSelect.leftSelection, 
        playerRight = this.playerSelect.rightSelection
    ) 
    {
        const data = {
            labels: [
                '#1 Singles (BillBoard Hot100)', 
                'Platinum Singles', 
                '#1 Albums (BillBoard 200)', 
                'Platinum Albums', 
                'Grammy Awards'
            ],
            datasets: [{
                label: playerLeft.stageName,
                data: this.setLeftValues(playerLeft),
                backgroundColor: 'lightcoral',
                datalabels: {
                    color: 'lightcoral',
                    anchor: 'start',
                    align: 'start',
                    offset: 10,
                    formatter: function (value, index, values) {
                        return value !== 0 ? Math.abs(value) : '';
                    }
                }
            },
            {
                label: playerRight.stageName,
                data: this.setRightValues(playerRight),
                backgroundColor: 'lightskyblue',
                datalabels: {
                    color: 'lightskyblue',
                    anchor: 'end',
                    align: 'end',
                    offset: 10,
                    formatter: function (value, index, values) {
                        return value !== 0 ? Math.abs(value) : '';
                    }
                }
            }]
        }
        return data;
    }

    setSuggestedMax(
        leftData = this.setLeftValues(), 
        rightData = this.setRightValues()
    ) 
    {
        const totalData = leftData.concat(rightData);
        let maxValue = Math.max(...totalData);
        return (Math.ceil(maxValue / 10) * 10) + 10; // REFACTOR THIS LATER
    }

    setConfig(data) {
        const config = {
            type: 'bar',
            data,
            plugins: [ChartDataLabels],
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        suggestedMax: this.setSuggestedMax(),
                        suggestedMin: (-1 * this.setSuggestedMax()),
                        stacked: true,
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: false,
                            callback: function(value, index, values) {
                                return Math.abs(value);
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            mirror: true
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        yAlign: 'bottom',
                        titleAlign: 'center',
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label} ${Math.abs(context.raw)}`;
                            }
                        }
                    }
                }
            }
        }
        return config;
    }
    
    buildChart(config) {
        let playerStats = new Chart(this.playerChart, config);
        this.chart = playerStats;
    }

    updateChart(
        playerLeft = this.playerSelect.leftSelection,
        playerRight = this.playerSelect.rightSelection
    ) 
    {
        const newLeftData = this.setLeftValues(playerLeft);
        const newRightData = this.setRightValues(playerRight);
        
        this.chart.data.datasets[0].label = playerLeft.stageName;
        this.chart.data.datasets[0].data = newLeftData;

        this.chart.data.datasets[1].label = playerRight.stageName;
        this.chart.data.datasets[1].data = newRightData;

        let newSuggestedMax = this.setSuggestedMax(Object.values(playerLeft.stats), newRightData)

        this.chart.options.scales.x.suggestedMax = newSuggestedMax;
        this.chart.options.scales.x.suggestedMin = (-1 * newSuggestedMax);

        this.chart.update();
    }

    updateLeft(playerLeft = this.playerSelect.leftSelection) {
        const newLeftData = this.setLeftValues(playerLeft);
        this.chart.data.datasets[0].label = playerLeft.stageName;
        this.chart.data.datasets[0].data = newLeftData;
        let newSuggestedMax = this.setSuggestedMax(Object.values(playerLeft.stats));
        this.chart.options.scales.x.suggestedMax = newSuggestedMax;
        this.chart.options.scales.x.suggestedMin = (-1 * newSuggestedMax);
        this.chart.update();
    }

    updateRight(playerRight = this.playerSelect.rightSelection) {
        const newRightData = this.setRightValues(playerRight);
        this.chart.data.datasets[1].label = playerRight.stageName;
        this.chart.data.datasets[1].data = newRightData;
        let newSuggestedMax = this.setSuggestedMax(Object.values(this.playerSelect.leftSelection.stats), newRightData)
        this.chart.options.scales.x.suggestedMax = newSuggestedMax;
        this.chart.options.scales.x.suggestedMin = (-1 * newSuggestedMax);
        this.chart.update();
    }
}

export default PlayerStats;