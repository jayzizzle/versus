const artists = require('/src/scripts/data');
const PlayerSelect = require('/src/scripts/player_select');
const PlayerToggle = require('/src/scripts/player_toggle');
const PlayerStats = require('/src/scripts/player_stats');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is now fully loaded.');
    const ulPlayerSelect = document.getElementById("ul-player-select");
    const playerSelect = new PlayerSelect(ulPlayerSelect, artists);
    const playerToggle = new PlayerToggle(playerSelect);

    let playerChart = document.getElementById('chart').getContext('2d');
    let playerStats = new Chart(playerChart, {
        type: 'bar', //horizontalBar
        data: {
            labels: ['Platinum Albums', 'Platinum Singles', 'Grammys Won'],
            datasets: [{
                label: 'Numbers',
                data: [
                    24,
                    7,
                    12
                ],
                backgroundColor: [
                    'lightpink',
                    'lightblue',
                    'lightgreen'
                ],
                borderWidth: 1,
                borderColor: 'lightgrey',

            }]
        },
        options: {}
    });
});