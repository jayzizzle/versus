class PlayerSelect {
    constructor(ul, artists) {

        this.ele = ul;
        this.artists = artists;
        this.leftSelection = artists[0];
        this.rightSelection = artists[1];
        this.currentSide = 'left'
        this.isLeftLocked = false;
        this.isRightLocked = false;

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
        let displayLeftName = document.getElementById('left-player-name');
        let displayLeftAlias = document.getElementById('left-player-alias');
        let displayRightName = document.getElementById('right-player-name');
        let displayRightAlias = document.getElementById('right-player-alias');
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

            if (this.isCurrentlySelected(ele)) {
                this.toggleLock(ele);
                return
            }

            if (!!this.currentSide) {
                this.swapSelection(ele);

                if (this.isLeftLocked) {
                    this.currentSide = 'right';
                } else if (this.isRightLocked) {
                    this.currentSide = 'left'
                } else {
                    this.switchCurrentSide();
                }
            }
        }
    }

    toggleLock(ele) {
        if (!!ele.querySelector('.fa-lock')) {
            ele.innerHTML = '';
            if (ele.id === 'left-selection') {
                this.isLeftLocked = false;
                this.currentSide = 'left';
            } else {
                this.isRightLocked = false;
                this.currentSide = 'right';
            }
        } else {
            ele.innerHTML = '<i class="fas fa-lock"></i>';
            if (ele.id === 'left-selection') {
                this.isLeftLocked = true;
                ele.firstChild.classList.add('red');
            } else {
                this.isRightLocked = true;
                ele.firstChild.classList.add('blue');
            }

            if (this.isLeftLocked && this.isRightLocked) {
                this.currentSide = undefined;
            } else if (this.isLeftLocked && !this.isRightLocked) {
                this.currentSide = 'right';
            } else if (!this.ifLeftLocked && this.isRightLocked) {
                this.currentSide = 'left'
            }
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

    switchCurrentSide() {
        if (!!this.currentSide) {
            if (this.currentSide === 'left') {
                this.currentSide = 'right';
            } else {
                this.currentSide = 'left';
            }
        }
    }

    handleMouseOn(e) {
        e.stopPropagation();
        let ele = e.target;

        if (!!this.currentSide &&
            ele.tagName === 'LI' &&
            ele !== this.currentSideSelection() &&
            ele !== this.oppositeSideSelection()) {
            this.mouseOnActions(ele);
        }
    }

    mouseOnActions(ele) {
        let artist = this.artists[ele.dataset.id];
        let displayName = document.getElementById(`${this.currentSide}-player-name`);
        let displayAlias = document.getElementById(`${this.currentSide}-player-alias`);

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
        if (!this.currentSide) return
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

module.exports = PlayerSelect;