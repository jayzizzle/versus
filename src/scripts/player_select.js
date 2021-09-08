// const PlayerStats = require('/src/scripts/player_stats');
import PlayerStats from '/src/scripts/player_stats'

class PlayerSelect {
    constructor(ul, artists) {

        this.ele = ul;
        this.artists = artists;
        this.leftSelection = artists[0];
        this.rightSelection = artists[1];
        this.currentSide = 'left'

        this.playerStats = new PlayerStats(this, this.artists);

        for (let i = 0; i < artists.length; i++) {
            let artist = artists[i];
            let box = document.createElement('li');
            box.setAttribute('id', '');
            box.setAttribute('class', 'li-player-select')
            box.setAttribute('data-id', i);
            box.style.backgroundImage = `url("/src/images/selection/${artist.fileName}.jpg")`;
            ul.append(box);
        }

        this.setDefault();

        ul.addEventListener('click', this.handleClick.bind(this));
        ul.addEventListener('mouseover', this.handleMouseOn.bind(this));
        ul.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    setDefault() {
        let backgroundLeft = document.getElementById('player-side-left')
        let displayLeftName = document.getElementById('left-player-name');
        let displayLeftAlias = document.getElementById('left-player-alias');

        let backgroundRight = document.getElementById('player-side-right')
        let displayRightName = document.getElementById('right-player-name');
        let displayRightAlias = document.getElementById('right-player-alias');

        backgroundLeft.style.backgroundImage = `url("/src/images/background/${this.leftSelection.fileName}.jpg")`;
        displayLeftName.innerHTML = this.leftSelection.stageName;
        displayLeftAlias.innerHTML = this.leftSelection.alias;

        backgroundRight.style.backgroundImage = `url("/src/images/background_alt/${this.rightSelection.fileName}.jpg")`;
        displayRightName.innerHTML = this.rightSelection.stageName;
        displayRightAlias.innerHTML = this.rightSelection.alias;

        const list = document.getElementsByClassName('li-player-select');

        list[this.leftSelection.id].id = 'left-selection';
        list[this.rightSelection.id].id = 'right-selection';
    }

    handleClick(e) {
        e.stopPropagation();
        let ele = e.target;
        if (ele.tagName === 'I') ele = ele.parentNode;
        if (ele.tagName === 'LI' && !this.isCurrentlySelected(ele)) {
            this.swapSelection(ele);
            this.refreshChart();
        }
    }

    swapSelection(ele) {
        let oldSelection = this.currentSideSelection();
        oldSelection.id = '';

        ele.id = `${this.currentSide}-selection`;
        const artist = this.artists[ele.dataset.id];

        if (this.currentSide === 'left') {
            this.leftSelection = artist;
        } else {
            this.rightSelection = artist;
        }
    }

    refreshChart() {
        this.playerStats.updateChart(this.leftSelection, this.rightSelection);
    }

    handleMouseOn(e) {
        e.stopPropagation();
        let ele = e.target;

        if (ele.tagName === 'LI' &&
            ele !== this.currentSideSelection() &&
            ele !== this.oppositeSideSelection()) {
            this.mouseOnActions(ele);
        }
    }

    mouseOnActions(ele) {
        let artist = this.artists[ele.dataset.id];

        let backgroundImg = document.getElementById(`player-side-${this.currentSide}`)
        let displayName = document.getElementById(`${this.currentSide}-player-name`);
        let displayAlias = document.getElementById(`${this.currentSide}-player-alias`);

        if (this.currentSide === 'left') {
            backgroundImg.style.backgroundImage = `url("/src/images/background/${artist.fileName}.jpg")`
        } else if (this.currentSide === 'right') {
            backgroundImg.style.backgroundImage = `url("/src/images/background_alt/${artist.fileName}.jpg")`
        }

        displayName.innerHTML = artist.stageName;
        displayAlias.innerHTML = artist.alias;
    }

    handleMouseOut(e) {
        e.stopPropagation();
        this.setDefault();
    }

    currentSideSelection() {
        return document.getElementById(`${this.currentSide}-selection`);
    }

    oppositeSide() {
        if (!this.currentSide) return;
        return this.currentSide === 'left' ? 'right' : 'left';
    }

    oppositeSideSelection() {
        let oppSide = this.oppositeSide();
        return document.getElementById(`${oppSide}-selection`);
    }

    isCurrentlySelected(ele) {
        return ele.id === 'left-selection' || ele.id === 'right-selection'
    }

}

export default PlayerSelect;