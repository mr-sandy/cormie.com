import { Cell, BonusType } from '../../../types';
import TileComponent from '../../TileComponent';

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

const Square = (props: SquareProps) => {
  const { cell } = props;

  return (
    <div>
      {cell.tile && <TileComponent tile={cell.tile} />}
      <style jsx>
        {`
        div {
          margin; 0;
          padding; 0;
          border: 1px solid white;
          display: table-cell;
          width: 30px;
          height: 30px;
          overflow; hidden;
          background-color: ${determineColour(cell)};
          position: relative;
        }
      `}
      </style>
    </div>
  );
}

export default Square;