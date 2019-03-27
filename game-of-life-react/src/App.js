import React, { Component } from 'react';
import GameOfLife from '../../game-of-life-tdd-js/';
import './App.css';

const { CellState, Game } = GameOfLife;
const { DEAD, ALIVE } = CellState;

const initialGrid = [
  [DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD],
];

const game = new Game(initialGrid);

class App extends Component {
  state = {
    grid: game.grid
  }

  render() {
    return (
      <div className="App">
        <h1>Conway's Game of Life</h1>

        <table>
          {
            this.state.grid.map((row, rowNumber) => (
              <tr key={rowNumber}>
                {
                  row.map((cell, colNumber) => (
                    <td key={colNumber}
                      className="cell"
                      style={{
                        background: ALIVE === cell.state ? 'black' : 'white'
                      }}
                    ></td>
                  ))
                }
              </tr>
            ))
          }
        </table>
      </div>
    );
  }
}

export default App;
