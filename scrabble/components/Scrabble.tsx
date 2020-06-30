import React from 'react';
import Board from './Board';
import NewGame from './NewGame';
import SetUpGame from './SetUpGame';
import ActiveGame from './ActiveGame';
import { GameState } from '../types';
import { Provider, useAppState } from '../Provider';

function Game() {
  const state = useAppState();

  switch (state.gameState) {
    case GameState.NoGame:
      return <NewGame />

    case GameState.SettingUp:
      return <SetUpGame />

    case GameState.Started:
      return <ActiveGame />

    default:
      return <h1>ERROR!!</h1>
  }
}

function Scrabble() {
  return (
    <Provider>
      <div className="game">
        <div className="board">
          <Board />
        </div>
        <div className="players">players</div>
        <div className="tiles">tiles</div>
      </div>
      <style jsx>
        {`
          div.game {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr;
            background-color: #fff;  
          }
 
          div.board,
          div.players,
          div.tiles
           {
            background-color: red;
            color: #fff;
            border-radius: 5px;
            padding: 20px;
            font-size: 150%;
          }
    
          div.board {
            grid-column: 1;
            grid-row: 1;
          }

          div.square {
            background-color: blue;
            color: #fff;
            border-radius: 5px;
            padding: 10px;
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
