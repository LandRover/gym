import CellState from '../src/cell_state';

describe('CellState', () => {

    test('Should have a ALIVE cell state', () => {
        expect(CellState.ALIVE).toBe(1);
    });

    test('Should have a DEAD cell state', () => {
        expect(CellState.DEAD).toBe(0);
    });

});