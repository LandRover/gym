import Cell from './cell';

export default class Game {

    constructor(grid) {
        this.grid = grid.map(row => row.map(cellState => new Cell(cellState)));
    }


    getCell(row, col) {
        return this.grid[row][col];
    }


    getNumberOfAlive(row, col) {
        return 8;
    }
}