import artists from '/src/scripts/data';
import PlayerSelect from '/src/scripts/player_select';
import PlayerToggle from '/src/scripts/player_toggle';

document.addEventListener('DOMContentLoaded', () => {
    const ulPlayerSelect = document.getElementById("ul-player-select");
    const playerSelect = new PlayerSelect(ulPlayerSelect, artists);
    const playerToggle = new PlayerToggle(playerSelect);
});