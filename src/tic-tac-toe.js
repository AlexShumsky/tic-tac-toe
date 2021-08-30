class TicTacToe {
    constructor() {
        this.winner = null;
        this.draw = false;
        this.currentPlayer = 'x';
        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) return;
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        (this.currentPlayer == 'x') ? this.currentPlayer = 'o' : this.currentPlayer = 'x';

    }

    isFinished() {
        if (this.gameField.some(rowVal => rowVal.every(columnVal => columnVal === 'x'))) { this.winner = 'x'; return true };
        if (this.gameField.some(rowVal => rowVal.every(columnVal => columnVal === 'o'))) { this.winner = 'o'; return true };
        if ((this.gameField[0][0] === this.gameField[1][0] && this.gameField[0][0] === this.gameField[2][0] && this.gameField[0][0] != null) ||
            (this.gameField[0][1] === this.gameField[1][1] && this.gameField[0][1] === this.gameField[2][1] && this.gameField[0][1] != null) ||
            (this.gameField[0][2] === this.gameField[1][2] && this.gameField[0][2] === this.gameField[2][2] && this.gameField[0][2] != null) ||
            (this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2] && this.gameField[0][0] != null) ||
            (this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0] && this.gameField[0][2] != null))
            return true;
        if (this.gameField.every(rowVal => rowVal.every(columnVal => columnVal != null))) { this.draw = true; return true }
        return false;
    }

    getWinner() {
        this.isFinished();
        if (this.gameField[0][0] === this.gameField[1][0] && this.gameField[0][0] === this.gameField[2][0] && this.gameField[0][0] != null) this.winner = this.gameField[0][0];
        if (this.gameField[0][1] === this.gameField[1][1] && this.gameField[0][1] === this.gameField[2][1] && this.gameField[0][1] != null) this.winner = this.gameField[0][1];
        if (this.gameField[0][2] === this.gameField[1][2] && this.gameField[0][2] === this.gameField[2][2] && this.gameField[0][2] != null) this.winner = this.gameField[0][2];
        if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2] && this.gameField[0][0] != null) this.winner = this.gameField[0][0];
        if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0] && this.gameField[0][2] != null) this.winner = this.gameField[0][2];
        return this.winner;
    }

    noMoreTurns() {
        return (this.gameField.every(rowVal => rowVal.every(columnVal => columnVal != null))) ? true : false;
    }

    isDraw() {
        this.isFinished();
        return (this.draw === true) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex] || null;
    }
}
module.exports = TicTacToe;
