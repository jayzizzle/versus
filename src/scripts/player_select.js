class PlayerSelect {
    constructor (ul, artists) {
        this.ele = ul;
        this.artists = artists;
        this.leftSelection = artists[0];
        this.rightSelection = artists[1];

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

        const oldLeftSelection = document.getElementsByClassName('left-selection');
        oldLeftSelection[0].classList.remove("left-selection");

        ele.classList.add('left-selection');
        const artist = this.artists[ele.dataset.id];
        this.leftSelection = artist;
        this.hoverChain(ele);
    }

    handleHover(e) {
        e.stopPropagation();
        let ele = e.target;
        this.hoverChain(ele);
    }

    handleOffHover(e) {
        e.stopPropagation();
        let ele = e.target;
        this.defaultLoad();
    }

    hoverChain(ele) {
        const artist = this.artists[ele.dataset.id];
        const displayName = document.getElementById('left-player-name');
        const displayAlias = document.getElementById('left-player-alias');
        if (artist) displayName.innerHTML = artist.stageName;
        if (artist) displayAlias.innerHTML = artist.alias;
    }
}

module.exports = PlayerSelect;