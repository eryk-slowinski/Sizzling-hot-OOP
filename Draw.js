class Draw {
    constructor() {
        this.options = ['url("images/cherrys.png")', 'url("images/lemon.png")', 'url("images/plum.png")', 'url("images/watermelon.png")'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }
    drawResult() {
        let draw = [];
        for (let i = 0; i < this.options.length; i++) {
            draw.push(this.options[(Math.floor(Math.random() * this.options.length))])
        }
        return draw;
    }
}