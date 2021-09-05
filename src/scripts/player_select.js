class PlayerSelect {
    constructor (ul, artists) {
        this.ele = ul;
        this.artists = artists;
        this.leftSelection = artists[0];
        this.rightSelection = artists[1];
        this.currentSide = 'left'

        for(let i = 0; i < artists.length; i++) {
            let box = document.createElement('li');
            box.setAttribute('class','li-player-select')
            box.setAttribute('data-id', i);
            ul.append(box);
        }

        this.defaultLoad();
        ul.addEventListener('click', this.handleClick.bind(this));
        ul.addEventListener('mouseover', this.handleHover.bind(this));
        ul.addEventListener('mouseout', this.handleOffHover.bind(this));
    }
    defaultLoad() {
        const displayLeftName = document.getElementById('left-player-name');
        const displayLeftAlias = document.getElementById('left-player-alias');
        const displayRightName = document.getElementById('right-player-name');
        const displayRightAlias = document.getElementById('right-player-alias');
        displayLeftName.innerHTML = this.leftSelection.stageName;
        displayLeftAlias.innerHTML = this.leftSelection.alias;
        displayRightName.innerHTML = this.rightSelection.stageName;
        displayRightAlias.innerHTML = this.rightSelection.alias;

        const list = document.getElementsByClassName('li-player-select');
        list[this.leftSelection.id].classList.add('left-selection');
        list[this.rightSelection.id].classList.add('right-selection');
    }

    handleClick(e) {
        e.stopPropagation();
        let ele = e.target;
        if (ele.tagName === 'LI') {
            const oldSelection = document.getElementsByClassName(`${this.currentSide}-selection`);
            oldSelection[0].classList.remove(`${this.currentSide}-selection`);
            ele.classList.add(`${this.currentSide}-selection`);
            
            this.switchCurrentSide();

            const artist = this.artists[ele.dataset.id];
            this.changeSelection(artist);

            this.hoverChain(ele);

            this.lockSelection(ele);
        }
    }

    handleHover(e) {
        e.stopPropagation();
        let ele = e.target;
        if (ele.tagName === 'LI') this.hoverChain(ele);
    }

    handleOffHover(e) {
        e.stopPropagation();
        let ele = e.target;
        this.defaultLoad();
    }

    hoverChain(ele) {
        const artist = this.artists[ele.dataset.id];
        const displayName = document.getElementById(`${this.currentSide}-player-name`);
        const displayAlias = document.getElementById(`${this.currentSide}-player-alias`);

        displayName.innerHTML = artist.stageName;
        displayAlias.innerHTML = artist.alias;
    }

    switchCurrentSide() {
        if (this.currentSide === 'left') {
            this.currentSide = 'right';
        } else {
            this.currentSide = 'left'
        }
    }

    changeSelection(artist) {
        if (this.currentSide === 'left') {
            this.rightSelection = artist;
        } else {
            this.leftSelection = artist;
        }
    }

    lockSelection(ele) {
        ele.innerHTML = '<i class="fas fa-lock"></i>'
    }
}

module.exports = PlayerSelect;