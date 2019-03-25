import CellState from './cell_state';

export default class Cell {
    constructor(state) {
        if (CellState.ALIVE !== state && CellState.DEAD !== state) {
            throw new Error('Invalid state provided to Cell. State: ' + state);
        }

        this.state = state;
    }

}