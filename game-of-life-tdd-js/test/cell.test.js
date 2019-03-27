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
    });

    test('Should die if it has fewer than 2 live neighbours', () => {
        const cell = new Cell(CellState.ALIVE);

        const nextStateWith0Neighbors = cell.getNextState(0);
        expect(nextStateWith0Neighbors).toBe(CellState.DEAD);
    });

    test('Should stay dead if it has fewer than 2 neighbors', () => {
        const cell = new Cell(CellState.DEAD);

        const nextStateWith0Neighbors = cell.getNextState(0);
        expect(nextStateWith0Neighbors).toBe(CellState.DEAD);

        const nextStateWith1Neighbors = cell.getNextState(1);
        expect(nextStateWith1Neighbors).toBe(CellState.DEAD);
    });

    test('Should live with 2 or 3 live neighbours', () => {
        const cell = new Cell(CellState.ALIVE);

        const nextStateWith2Neighbors = cell.getNextState(2);
        expect(nextStateWith2Neighbors).toBe(CellState.ALIVE);

        const nextStateWith3Neighbors = cell.getNextState(3);
        expect(nextStateWith3Neighbors).toBe(CellState.ALIVE);
    });

    test('Should die with more than 3 neighbours', () => {
        const cell = new Cell(CellState.ALIVE);

        const nextStateWith4Neighbors = cell.getNextState(4);
        expect(nextStateWith4Neighbors).toBe(CellState.DEAD);
    });

    test('Should come alive with exactly 3 neighbours', () => {
        const cell = new Cell(CellState.DEAD);

        const nextStateWith3Neighbors = cell.getNextState(3);
        expect(nextStateWith3Neighbors).toBe(CellState.ALIVE);
    });

});