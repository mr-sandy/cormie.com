import { useAppDispatch } from "../Provider";
import { ActionTypes } from "../actions";

function NewGame() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: ActionTypes.NEW_GAME })}>
        New Game
      </button>
      <style jsx>
        {`
          div {
            border: 1px solid black;
            padding: 20px;
          }
        `}
      </style>
    </div>
  );
}

export default NewGame;