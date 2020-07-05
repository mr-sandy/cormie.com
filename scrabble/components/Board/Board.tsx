import { useAppState, useAppDispatch } from '../../Provider';
import { Cell, BonusType, CellSelection, GameState } from '../../types';
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

function selectionStyle(selection: CellSelection) {
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
        {selection && <div className="selection" style={selectionStyle(selection)}></div>}
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
            margin: -3px;
            border: 3px dashed #333;
            z-index: 100;
            pointer-events: none;
          }
        `}
      </style>
    </>
  );
}

export default Board;
