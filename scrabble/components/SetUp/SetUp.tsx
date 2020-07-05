import { useAppState, useAppDispatch } from "../../Provider";
import AddPlayer from "./AddPlayer";
import { ActionTypes } from "../../actions";

function SetUp() {
  const { players } = useAppState();
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Players!</h1>
      <ul>
        {players.map((player, i) => <li key={i}>{player.name}</li>)}
      </ul>
      <AddPlayer />
      <button disabled={players.length === 0} onClick={() => dispatch({ type: ActionTypes.START_GAME })}>Start game</button>
    </>
  );
}

export default SetUp;