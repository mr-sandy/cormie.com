import Square from './Square';
import { useAppState } from '../../../Provider';

function Board ()  {
  const { board } = useAppState();

  return (
    <div className='board'>
      {board.map((row: any, i: number) => (
        <div className='row' key={i}>{
          row.map((cell: any, j: number) => <Square key={j} cell={cell} />
          )}
        </div>
      ))}
      <style jsx>
        {`
          div.board {
            border: 1px solid black;
            padding: 20px;
            display: table;
          }
          div.row {
            display: table-row;
          }
        `}
      </style>
    </div>
  );
}

export default Board;
