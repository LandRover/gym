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

});