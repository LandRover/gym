import Game from '../src/game';
import Cell from '../src/cell';
import CellState from '../src/cell_state';
const { DEAD, ALIVE } = CellState;

const gridDead = [
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD],
];

describe('Game', () => {

    test('Should be initialized with a given grid', () => {
        const expectedGrid = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
        ];

        const game = new Game(gridDead);

        expect(game.grid).toEqual(expectedGrid);
    });


    test('Should retrieve a cell at a given row and column', () => {
        const game = new Game(gridDead);
        const cell = game.getCell(0, 0);

        expect(cell).toBeInstanceOf(Cell);
        expect(cell.state).toBe(gridDead[0][0]);
    });


    test('Should get the number of alive neighbours for a given cell', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
        ];

        const game = new Game(gameState);

        const neighboursCount = game.getNumberOfAlive(1, 1);
        expect(neighboursCount).toBe(8);
    });

});