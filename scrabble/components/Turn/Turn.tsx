import { useAppState } from "../../Provider";
import TileComponent from "../TileComponent";
import Builder from "./Builder";

function Turn() {
  const { players, currentPlayer, selection } = useAppState();


  const player = players[currentPlayer];

  return (
    <>
      <h3>It's {player.name}'s Turn</h3>
      <ul>
        {player.tiles.map((tile, i) =>
          <li key={i}>
            <TileComponent tile={tile} />
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