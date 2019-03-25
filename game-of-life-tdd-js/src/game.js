import Cell from './cell';

export default class Game {
    constructor(grid) {
        this.grid = grid.map(row => row.map(cellState => new Cell(cellState)));
    }
}