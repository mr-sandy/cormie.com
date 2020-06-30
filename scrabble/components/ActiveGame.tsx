import Board from './Board';
import Rack from './Rack';

const ActiveGame = (props: any) => {
  return <>
    <Board {...props} />
    <Rack />
  </>
}

export default ActiveGame;