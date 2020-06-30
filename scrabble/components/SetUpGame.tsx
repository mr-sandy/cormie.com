import { useState, FormEvent, ChangeEvent } from 'react';
import { useAppDispatch, useAppState } from '../Provider';
import { ActionTypes } from '../actions';

function AddPlayerControl() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch({ type: ActionTypes.ADD_PLAYER, name: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
          <input type="text" value={value} onChange={e => setValue(e.currentTarget.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function SetUpGame() {
  const {players} = useAppState();
  return <>
    <h1>Set up game</h1>
  players: {players.length}
    <AddPlayerControl />
  </>
}

export default SetUpGame;