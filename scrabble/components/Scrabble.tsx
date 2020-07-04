import React from 'react';
import Board from './Board';
import { Provider } from '../Provider';
import GameStateDisplay from './GameStateDisplay';

function Scrabble() {

  return (
    <Provider>
      <div className="game">
        <div className="board">
          <Board />
        </div>
        <div className="players">
          <GameStateDisplay />
        </div>
        <div className="tiles">tiles</div>
      </div>
      <style jsx>
        {`
          div.game {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 2fr 1fr;
          }
 
          div.board,
          div.players,
          div.tiles
           {
            padding: 20px;
          }
    
          div.board {
            grid-column: 1;
            grid-row: 1;
          }

          div.players {
            grid-column: 2;
            grid-row: 1;
          }

          div.tiles {
            grid-column: 1 / 3 ;
            grid-row: 2;
          }
        `}
      </style>
    </Provider >
  );
}

export { Scrabble };
