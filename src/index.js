const artists = require('/src/scripts/data');
const PlayerSelect = require('/src/scripts/player_select')
const PlayerToggle = require('/src/scripts/player_toggle')

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is now fully loaded.');
    const ulPlayerSelect = document.getElementById("ul-player-select");
    const playerSelect = new PlayerSelect(ulPlayerSelect, artists);
    const playerToggle = new PlayerToggle(playerSelect);
});