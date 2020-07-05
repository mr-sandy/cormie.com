import Board from "./Board";
import { useAppState } from "../Provider";
import { GameState } from "../types";
import SetUp from "./SetUp";
import Scores from "./Scores";
import Turn from "./Turn/Turn";

function Game() {
  const { gameState } = useAppState();

  return <>
    <div className="game">
      <div className="board">
        <Board />
      </div>
      <div className="players">
        {gameState === GameState.SettingUp && <SetUp />}
        {gameState === GameState.Started && <Scores />}
        {gameState === GameState.Started && <Turn />}
      </div>
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
        `}
    </style>
  </>
}

export default Game;