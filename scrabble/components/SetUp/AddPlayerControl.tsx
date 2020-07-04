import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../Provider';
import { ActionTypes } from '../../actions';

function AddPlayer() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({type: ActionTypes.ADD_PLAYER, name: value})
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddPlayer;