class Stats {
    constructor() {
        this.gameStatistics = [];
    }
    addGameToStats(win, bid) {
        let gameStats = {
            win,
            bid,
        }
        this.gameStatistics.push(gameStats)
    }
    showGamesStats() {
        let games = this.gameStatistics.length;
        let wins = this.gameStatistics.filter(result => result.win).length;
        let losses = this.gameStatistics.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}