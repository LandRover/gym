import CellState from './cell_state';

export default class Cell {
    constructor(state) {
        if (!Object.values(CellState).includes(state)) {
            throw new Error('Invalid state provided to Cell. State: ' + state);
        }

        this.state = state;
    }

    getNextState(neighboursCount) {
        return CellState.DEAD;
    }

}