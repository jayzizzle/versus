class PlayerSelect {
    constructor (ul, artists) {
        this.ele = ul;
        this.artists = artists;
        this.leftSelection = artists[0];
        this.rightSelection = artists[1];
        this.currentSide = 'left'

        for(let i = 0; i < artists.length; i++) {
            let box = document.createElement('li');
            box.setAttribute('id', '');
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

        list[this.leftSelection.id].id = 'left-selection';
        list[this.rightSelection.id].id = 'right-selection';
    }

    handleClick(e) {
        e.stopPropagation();
        let ele = e.target;
        if (ele.tagName === 'I') ele = ele.parentNode;
        if (ele.tagName === 'LI') {
            if (this.isAlreadySelected(ele)) {
                this.toggleLock(ele);
                return;
            } else if (this.currentSide && !this.isOppositeSelection(ele)) {

                const oldSelection = document.getElementById(`${this.currentSide}-selection`);
                oldSelection.id = '';
                ele.id = `${this.currentSide}-selection`;
                
                if (!this.isOppositeSideLocked()) this.switchCurrentSide();

                const artist = this.artists[ele.dataset.id];
                this.changeSelection(artist);
            }
        }
    }

    handleHover(e) {
        e.stopPropagation();
        let ele = e.target;
        
        if (this.currentSide && ele.tagName === 'LI' && !this.isAlreadySelected(ele) && !this.isBothLocked()) {
            this.hoverChain(ele);
        }
    }

    handleOffHover(e) {
        e.stopPropagation();
        this.defaultLoad();
    }

    hoverChain(ele) {
        const artist = this.artists[ele.dataset.id];
        const displayName = document.getElementById(`${this.currentSide}-player-name`);
        const displayAlias = document.getElementById(`${this.currentSide}-player-alias`);

        displayName.innerHTML = artist.stageName;
        displayAlias.innerHTML = artist.alias;
    }

    getOppositeSide() {
        let oppSide;
        this.currentSide === 'left' ? oppSide = 'right' : oppSide = 'left';
        return oppSide;
    }

    isOppositeSelection(ele) {
        let oppSide = this.getOppositeSide();
        return ele.id === `${oppSide}-selection`;
    }

    isAlreadySelected(ele) {
        if (ele.id === 'left-selection' || ele.id === 'right-selection') {
            return true;
        } else {
            return false;
        }
    }

    isCurrentSideAlreadySelected(ele) {
        return ele.id === `${this.currentSide}-selection`;
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

    toggleLock(ele) {
        if (ele.innerHTML) {
            ele.innerHTML = '';
            if (ele.id === 'left-selection') {
                this.currentSide = 'left';
            } else {
                this.currentSide = 'right';
            }
        } else {
            ele.innerHTML = '<i class="fas fa-lock"></i>'
            if (this.isCurrentSideAlreadySelected(ele)) {
                this.switchCurrentSide();
                if (this.isBothLocked()) {
                    this.currentSide = undefined;
                }
            }
        }
    }
    isBothLocked() {
        let numLocks = document.getElementsByClassName('fa-lock').length;
        if (numLocks === 2) this.currentSide = undefined;
        numLocks === 2;
    }
    isOppositeSideLocked() {
        let oppSide = this.getOppositeSide();
        ele = document.getElementById(`${oppSide}-selection`);
        ele.hasChildNodes();
    }
}

module.exports = PlayerSelect;