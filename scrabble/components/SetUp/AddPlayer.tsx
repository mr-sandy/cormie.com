import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../Provider';
import { ActionTypes } from '../../actions';

function AddPlayer() {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch({ type: ActionTypes.ADD_PLAYER, name: value });
    setValue('');
  }

  return (
    <>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          <input type="text" autoFocus={true} placeholder="Player name" value={value} onChange={e => setValue(e.target.value)} />
        </label>
        <input disabled={value.trim().length === 0} type="submit" value="Add" />
      </form>
      <style jsx>
        {`
          input {
            padding: 10px;
          }
        `}
      </style>
    </>
  );
}

export default AddPlayer;