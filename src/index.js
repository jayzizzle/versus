const artists = require('/src/scripts/data');
const PlayerSelect = require('/src/scripts/player_select')

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is now fully loaded.');
    const ulPlayerSelect = document.getElementById("ul-player-select");
    const playerSelect = new PlayerSelect(ulPlayerSelect, artists)

});