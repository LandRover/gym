import Cell from '../src/cell';
import CellState from '../src/cell_state';

describe('Cell', () => {

    test('Should be initialized with a CellState', () => {
        const cellAlive = new Cell(CellState.ALIVE);
        expect(cellAlive.state).toBe(CellState.ALIVE);

        const cellDead = new Cell(CellState.DEAD);
        expect(cellDead.state).toBe(CellState.DEAD);
    });

    test('Should throw an Error if not initialized with valid CellState', () => {
        expect(() => {
            const cell = new Cell(null);
        }).toThrow();
    })

});