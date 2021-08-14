import produce from 'immer';
import { Board, Orientation, Cell } from '../domain';

const formatRow = (cells: Cell[]) => {
  return cells.reduce((sofar, cell) => `${sofar}${cell.tile ? cell.tile.letter : ' '}|`, '')
}

const formatBoard = (Board: Board) => {
  return Board.cells.reduce((sofar, row) => `${sofar}\n-------------------\n|${formatRow(row)}`, '');
}

describe('when updating state with immer', () => {
  const state = new Board();

  console.log(formatBoard(state));

  const newState = produce(state, draft => {
    draft.placeTiles(4, 2, Orientation.Horizontal, [
      { letter: 's', value: 1 },
      { letter: 'a', value: 1 },
      { letter: 'n', value: 1 },
      { letter: 'd', value: 1 },
      { letter: 'y', value: 1 },
    ]);

  });

  console.log(formatBoard(newState));

  it('should return a new object', () => {
    expect(newState).not.toBe(state);
    expect(newState.cells[2]).toBe(state.cells[2]);
  });
});