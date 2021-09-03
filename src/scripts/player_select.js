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
        ul.addEventListener('mouseover', this.handleHover.bind(this));
    }
    defaultLoad() {
        
    }

    handleHover(e) {
        let ele = e.target;
        e.stopPropagation();
        this.hoverChain(ele);
    }

    hoverChain(ele) {
        const artist = this.artists[ele.dataset.id];
        const displayName = document.getElementById('left-player-name');
        if (artist) displayName.innerHTML = artist.alias;
    }
}

module.exports = PlayerSelect;