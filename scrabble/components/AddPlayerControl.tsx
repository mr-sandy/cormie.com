import { useState, FormEvent } from 'react';

const AddPlayerControl = (props: any) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent) => {
    console.log('Submit!! ' + value);
    event.preventDefault();
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

export default AddPlayerControl;