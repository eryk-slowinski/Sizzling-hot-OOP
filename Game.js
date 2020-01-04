class Game {
    constructor(startMoney) {
        this.stats = new Stats();
        this.wallet = new Wallet(startMoney);
        document.getElementById("start").addEventListener('click', this.startGame.bind(this));
        this.boards = [...document.querySelectorAll('div.draw')];
        this.inputBid = document.getElementById("bid");
        this.spanWallet = document.querySelector("span.wallet");
        this.spanResult = document.querySelector("span.result");
        this.spanNumber = document.querySelector("span.number");
        this.spanWin = document.querySelector("span.win");
        this.spanLoss = document.querySelector("span.loss");
        this.render()
    }
    render(money = this.wallet.getWalletValue(), stats = [0, 0, 0], draw = ['none', 'none', 'none', 'none'], result = "", wonMoney = 0) {
        this.boards.forEach((board, i) => {
            board.style.backgroundImage = draw[i];
        })
        this.spanWallet.textContent = money;
        if (result) result = `You have won ${wonMoney} credits!`;
        else if (!result && result !== "") result = 'Try again!';
        this.spanResult.textContent = result;
        this.spanNumber.textContent = `${stats[0]}  games in total`;
        this.spanWin.textContent = `${stats[1]} wins`;
        this.spanLoss.textContent = `${stats[2]} losses`;
    }
    startGame() {
        if (this.inputBid.value < 1) {
            alert('You need to bet at least 1 credit');
            return;
        }
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) {
            return alert("You don't have enough credits")
        }
        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const draws = this.draw.getDrawResult();
        const win = Result.checkWin(draws);
        const wonMoney = Result.moneyWonInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStats(win, bid);
        this.render(this.wallet.getWalletValue(), this.stats.showGamesStats(), draws, win, wonMoney)
    }
}