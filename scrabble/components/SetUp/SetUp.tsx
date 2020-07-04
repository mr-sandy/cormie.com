import { useAppState, useAppDispatch } from "../../Provider";
import AddPlayer from "./AddPlayerControl";
import { ActionTypes } from "../../actions";

function SetUp() {
  const { players, gameState } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Players! {gameState}</h1>
      <ul>
        {players.map((player, i) => <li key={i}>{player.name}</li>)}
      </ul>
      <AddPlayer />
      <button onClick={() => dispatch({ type: ActionTypes.START_GAME })}>Start game</button>
    </>
  );
}

export default SetUp;