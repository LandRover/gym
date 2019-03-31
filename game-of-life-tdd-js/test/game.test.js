import Game from '../src/game';
import Cell from '../src/cell';
import CellState from '../src/cell_state';
const { DEAD, ALIVE } = CellState;

const preDefinedGrid = [
    [DEAD, DEAD, DEAD],
    [DEAD, ALIVE, DEAD],
    [DEAD, DEAD, DEAD],
];

describe('Game', () => {
    test('Game should be able to initialize with a size', () => {
        const GRID_SIZE = 16;
        const game = new Game(GRID_SIZE, GRID_SIZE);

        expect(game.grid.length).toEqual(GRID_SIZE);
        expect(game.grid[0].length).toEqual(GRID_SIZE);
    });


    test('Should be initialized with a given grid', () => {
        const expectedGrid = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(ALIVE), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];

        const game = new Game(3, 3);
        game.setCustomGrid(preDefinedGrid);

        expect(game.grid).toEqual(expectedGrid);
    });


    test('Should retrieve a cell at a given row and column', () => {
        const game = new Game(3, 3);
        game.setCustomGrid(preDefinedGrid);
        const cell = game.getCell(0, 0);

        expect(cell).toBeInstanceOf(Cell);
        expect(cell.state).toBe(preDefinedGrid[0][0]);
    });


    test('Should get the number of alive neighbours for a given cell', () => {
        const gameGrid = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
        ];

        const game = new Game(3, 3);
        game.setCustomGrid(gameGrid);

        const neighboursCount = game.getNumberOfAlive(1, 1);
        expect(neighboursCount).toBe(8);
    });


    test('Should get the number of alive neighbours above and below row', () => {
        const gameGrid = [
            [ALIVE, ALIVE, ALIVE],
            [DEAD, DEAD, DEAD],
            [ALIVE, ALIVE, ALIVE],
        ];

        const game = new Game(3, 3);
        game.setCustomGrid(gameGrid);

        const neighboursCount = game.getNumberOfAlive(1, 1);
        expect(neighboursCount).toBe(6);
    });


    test('Should get the number of alive neighbours with a cyclic border', () => {
        const gameGrid = [
            [ALIVE, DEAD, ALIVE],
            [DEAD, DEAD, DEAD],
            [ALIVE, DEAD, DEAD],
        ];

        const game = new Game(3, 3);
        game.setCustomGrid(gameGrid);

        const neighboursCount = game.getNumberOfAlive(0, 0);
        expect(neighboursCount).toBe(2);
    });

    test('Should get the number of alive neighbours for cell in a 16x16 grid', () => {
        const gameGrid = [
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
        ];

        const game = new Game(16, 16);
        game.setCustomGrid(gameGrid);

        const numberOfNeighbours = game.getNumberOfAlive(14, 2);
        expect(numberOfNeighbours).toBe(8);
    });


    test('Should create the next state of the game grid - blinker example', () => {
        const gameGrid = [
            [DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD],
        ];

        const game = new Game(5, 5);
        game.setCustomGrid(gameGrid);

        const nextGridState = game.getNextGridState();

        const expectedGridState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];

        expect(nextGridState).toEqual(expectedGridState);

        game.nextGeneration();
        expect(game.grid).toEqual(expectedGridState);
    });

});