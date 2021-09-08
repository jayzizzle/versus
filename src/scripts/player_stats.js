class PlayerStats {
    constructor(playerSelect, artists) {
        this.playerSelect = playerSelect;
        this.artists = artists;
        this.playerChart = document.getElementById('chart').getContext('2d');

        const data = this.setData();
        const config = this.setConfig(data);
        this.buildChart(config);
    }

    convertLeftData(playerLeftData) {
        let convertedData = [];
        playerLeftData.forEach(ele => convertedData.push(ele * -1));
        return convertedData;
    }
    
    setData(
        playerLeft = this.playerSelect.leftSelection, 
        playerRight = this.playerSelect.rightSelection
    ) 
    {
        const leftValues = this.convertLeftData(Object.values(playerLeft.stats));
        const rightValues = Object.values(playerRight.stats);

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
                data: leftValues,
                backgroundColor: 'lightcoral'
            },
            {
                label: playerRight.stageName,
                data: rightValues,
                backgroundColor: 'lightskyblue'
            }]
        }
        return data;
    }

    setConfig(data) {
        const config = {
            type: 'bar',
            data,
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        suggestedMax: 30,
                        suggestedMin: -30,
                        stacked: true,
                        grid: {
                            display: false
                        },
                        ticks: {
                            callback: function(value, index, values) {
                                return Math.abs(value);
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        grid: {
                            display: false
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
    }
}

export default PlayerStats;