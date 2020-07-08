import { useAppState, useAppDispatch } from '../../Provider';
import { Cell, BonusType, Selection, GameState } from '../../types';
import { ActionTypes } from '../../actions';
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



function cellStyle(row: number, column: number, cell: any) {
  return {
    gridRow: row + 1,
    gridColumn: column + 1,
    backgroundColor: determineColour(cell)
  };
}

function selectionStyle(selection: Selection) {
  const {startRow, endRow, startColumn, endColumn} = selection;
  return {
    gridRowStart: startRow + 1,
    gridRowEnd: endRow + 2,
    gridColumnStart: startColumn + 1,
    gridColumnEnd: endColumn + 2
  };
}

function Board() {
  const { gameState, board, selection } = useAppState();
  const dispatch = useAppDispatch();

  const handleCellClick = (row: number, column: number) => {
    if (gameState === GameState.Started) {
      dispatch({ type: ActionTypes.SELECT_CELL, row, column });
    }
  }

  return (
    <>
      <div className="board">
        {board.map((row: any, i: number) =>
          row.map((cell: any, j: number) => (
            <div key={`${i},${j}`} className="cell" onClick={() => handleCellClick(i, j)} style={cellStyle(i, j, cell)}>
              {cell.tile && <TileComponent tile={cell.tile} />}
            </div>)
          ))
        }
        {selection && <div className={`selection ${selection.valid ? '' : 'invalid'}`} style={selectionStyle(selection)}></div>}
      </div>

      <style jsx>
        {`
          div.board {
            border: 4px solid black;
            padding: 5%;
            display: grid;
            grid-template-columns: repeat(15, 1fr);
            grid-template-rows: repeat(15, 1fr);
            grid-gap: 0;
          }   

          div.cell {
            position: relative;
            box-sizing: border-box;
            border: 1px solid white;
          }
          
          div.cell::before {
            content: '';
            display: block;
            padding-top: 100%;
          }

          div.selection {
            margin: -4px;
            border: 4px dashed #333;
            z-index: 100;
            pointer-events: none;
          }

          div.selection.invalid {
            border: 4px dashed red;
          }
`}
      </style>
    </>
  );
}
            // opacity: 0.5;
            // background-image: linear-gradient(45deg, #f00c3a 15%, #ffffff 15%, #ffffff 50%, #f00c3a 50%, #f00c3a 65%, #ffffff 65%, #ffffff 100%);
            // background-size: 14.14px 14.14px;

export default Board;
