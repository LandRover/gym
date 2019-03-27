import React, { Component } from 'react';
import GameOfLifeTDD from '../../game-of-life-tdd-js/';
import './GameOfLife.css';

const { CellState, Game } = GameOfLifeTDD;
const { DEAD, ALIVE } = CellState;

const initialGrid = [
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, DEAD, ALIVE, DEAD, DEAD],
    [DEAD, DEAD, ALIVE, DEAD, DEAD],
    [DEAD, DEAD, ALIVE, DEAD, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD],
];

const game = new Game(initialGrid);

class GameOfLife extends Component {
    state = {
        grid: game.grid
    }

    nextGeneration = () => {
        const nextGeneration = game.nextGeneration();

        this.setState({
            grid: nextGeneration
        });
    }

    cellStateToggle = (row, col) => {
        let cell = game.getCell(row, col);

        cell.state = ALIVE === cell.state ? DEAD : ALIVE;

        this.setState({
            grid: game.grid
        });
    }

    render() {
        return (
            <div className="GameOfLife">
                <table>
                    <tbody>
                        {
                            this.state.grid.map((row, rowNumber) => (
                                <tr key={rowNumber}>
                                    {
                                        row.map((cell, colNumber) => (
                                            <td key={colNumber}
                                                className="cell"
                                                onClick={() => this.cellStateToggle(rowNumber, colNumber)}
                                                style={{
                                                    background: ALIVE === cell.state ? 'black' : 'white'
                                                }}
                                            ></td>
                                        ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <button onClick={this.nextGeneration}>Next Generation</button>
            </div>
        );
    }
}

export default GameOfLife;