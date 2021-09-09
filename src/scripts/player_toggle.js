class PlayerToggle {
    constructor(playerSelect) {
        this.playerSelect = playerSelect;
        this.playerToggle = document.getElementById('player-toggle');
        this.playerLeftLabel = document.getElementById('h6-toggle-left')
        this.playerRightLabel = document.getElementById('h6-toggle-right')

        this.playerRightLabel.classList.add('fade');

        this.playerToggle.addEventListener('change', this.handleToggle.bind(this));
    }
    handleToggle(e) {
        e.stopPropagation();
        let ele = e.target;
        let versus = document.getElementById('versus-select');
        if (ele.checked) {
            this.playerSelect.currentSide = 'right';
            this.playerLeftLabel.classList.add('fade');
            this.playerRightLabel.classList.remove('fade');
            versus.classList.add('lightskyblue');
            versus.classList.remove('lightcoral');
        } else {
            this.playerSelect.currentSide = 'left';
            this.playerRightLabel.classList.add('fade');
            this.playerLeftLabel.classList.remove('fade');
            versus.classList.add('lightcoral');
            versus.classList.remove('lightskyblue');
        }
    }
}

// module.exports = PlayerToggle;
export default PlayerToggle;