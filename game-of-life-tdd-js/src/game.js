import Cell from './cell';
import CellState from './cell_state';


export default class Game {
    grid = [];
    numRows = 16;
    numCols = 16;

    constructor(rows, cols) {
        this.numRows = rows;
        this.numCols = cols;

        this.resetGrid();
    }


    resetGrid() {
        this.grid = Array(this.numRows).fill(0).map(() => Array(this.numCols).fill(new Cell(CellState.DEAD)));
        return this;
    }


    setCustomGrid(grid) {
        this.grid = grid.map(row => row.map(cellState => new Cell(cellState)));

        return this;
    }


    randomCellState() {
        return Math.round(Math.random());
    }


    getCell(row, col) {
        return this.grid[row][col];
    }


    getNumberOfAlive(row, col) {
        let stateValues = {
            [CellState.ALIVE]: 1,
            [CellState.DEAD]: 0
        };

        let sum = 0;

        for (let rowOffset = - 1; rowOffset < 2; rowOffset++) {
            for (let cellOffset = - 1; cellOffset < 2; cellOffset++) {
                let x = (row + rowOffset + this.numRows) % this.numRows,
                    y = (col + cellOffset + this.numCols) % this.numCols;

                let cell = this.getCell(x, y);

                sum += stateValues[cell.state];
            }
        }

        sum -= this.getCell(row, col).state; // subtract current row + col - SELF

        return sum;
    }


    getNextGridState() {
        return this.grid.map((row, rowNum) => row.map((cell, colNum) => {
            let aliveNeighbours = this.getNumberOfAlive(rowNum, colNum);
            let nextState = cell.getNextState(aliveNeighbours);

            return new Cell(nextState);
        }));
    }


    nextGeneration() {
        return this.grid = this.getNextGridState();
    }
}