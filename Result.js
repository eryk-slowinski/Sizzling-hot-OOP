class Result {
    static checkWin(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] && draw[2] === draw[3] || draw[0] !== draw[1] && draw[0] !== draw[2] && draw[0] !== draw[3] && draw[1] !== draw[2] && draw[1] !== draw[3] && draw[2] !== draw[3]) return true;
        else return false;
    }
    static moneyWonInGame(result, bid) {
        if (result) return bid * 3;
        else return 0;
    }
}