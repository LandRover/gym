import CellState from './cell_state';

export default class Cell {
    constructor(state) {
        if (!Object.values(CellState).includes(state)) {
            throw new Error('Invalid state provided to Cell. State: ' + state);
        }

        this.state = state;
    }

    getNextState(neighboursCount) {
        if (CellState.DEAD === this.state) {
            if (3 === neighboursCount) {
                return CellState.ALIVE;
            }

            return CellState.DEAD;
        } else
            if (CellState.ALIVE === this.state) {
                if (2 > neighboursCount || 3 < neighboursCount) {
                    return CellState.DEAD;
                }

                return CellState.ALIVE;
            }
    }



}