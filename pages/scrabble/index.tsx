import { NextPage } from 'next';
import { Menu } from '../../components/Menu';
import { Scrabble as ScrabbleGame } from '../../scrabble/components/Scrabble';

const Scrabble: NextPage = () => {
  return (
    <>
      <Menu />
      <ScrabbleGame />
    </>
  );
}
export default Scrabble;



