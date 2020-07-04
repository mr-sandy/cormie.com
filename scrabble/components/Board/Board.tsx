import { useAppState } from '../../Provider';
import { Cell, BonusType } from '../../types';
import TileComponent from '../TileComponent';

const determineColour = (cell: Cell) => {
  switch (cell.bonus) {
    case BonusType.Start:
      return 'rgb(255,190,173)';
    case BonusType.TripleWord:
      return 'rgb(255,105,82)';
    case BonusType.DoubleWord:
      return 'rgb(255,190,173)';
    case BonusType.TripleLetter:
      return 'rgb(57,162,181)';
    case BonusType.DoubleLetter:
      return 'rgb(198,215,214)';
    default:
      return 'rgb(214,203,173)';
  }
}

type SquareProps = {
  cell: Cell
}

function Square(props: SquareProps) {
  const { cell } = props;

  return (
    <div>
      {cell.tile && <TileComponent tile={cell.tile} />}
      <style jsx>
        {`
          div {
            position: relative;
            border: 1px solid red;
            box-sizing: border-box;
            border: 1px solid white;
            overflow; hidden;
            background-color: ${determineColour(cell)};
          }
          
          div::before {
            content: '';
            display: block;
            padding-top: 100%;
          }
      `}
      </style>
    </div>
  );
}

function Board() {
  const { board } = useAppState();

  return (
    <div className='board2'>
      {board.map((row: any, i: number) => 
          row.map((cell: any, j: number) => <Square key={j} cell={cell} />
          ))
      }
      
      <style jsx>
        {`
          div.board2 {
            border: 4px solid black;
            padding: 5%;
            display: grid;
            grid-template-columns: repeat(15, 1fr);
            grid-gap: 0;
          }          
        `}
      </style>
    </div>
  );
}

export default Board;
