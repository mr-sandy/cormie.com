import { useAppState, useAppDispatch } from "../../Provider";
import TileComponent from "../TileComponent";
import Builder from "./Builder";
import { ActionTypes } from "../../actions";
import { Tile } from "../../types";

function Turn() {
  const { players, currentPlayer, candidateWord } = useAppState();
  const dispatch = useAppDispatch();

  const player = players[currentPlayer];

  function tileStyle(tile: Tile) {
    return candidateWord.find(t => t === tile)
      ? {
          border: '1px solid red'
      }
      : {

      }
  }

  return (
    <>
      <h3>It's {player.name}'s Turn</h3>
      <ul>
        {player.tiles.map((tile, i) =>
          <li style={tileStyle(tile)} key={i}>
            <TileComponent tile={tile} onClick={() => dispatch({ type: ActionTypes.SELECT_TILE, tile, player: currentPlayer })} />
          </li>)}
      </ul>
      <Builder />
      <style jsx>
        {`
          li {
            display: inline-block;
            width: 80px;
            height: 80px;
            position: relative;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
}

export default Turn;