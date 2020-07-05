import { BonusType, Cell } from '../types';

const bonusSquares = [
  { row: 0, column: 0, bonus: BonusType.TripleWord },
  { row: 0, column: 7, bonus: BonusType.TripleWord },
  { row: 0, column: 14, bonus: BonusType.TripleWord },
  { row: 7, column: 0, bonus: BonusType.TripleWord },
  { row: 7, column: 14, bonus: BonusType.TripleWord },
  { row: 14, column: 0, bonus: BonusType.TripleWord },
  { row: 14, column: 7, bonus: BonusType.TripleWord },
  { row: 14, column: 14, bonus: BonusType.TripleWord },
  { row: 1, column: 1, bonus: BonusType.DoubleWord },
  { row: 2, column: 2, bonus: BonusType.DoubleWord },
  { row: 3, column: 3, bonus: BonusType.DoubleWord },
  { row: 4, column: 4, bonus: BonusType.DoubleWord },
  { row: 1, column: 13, bonus: BonusType.DoubleWord },
  { row: 2, column: 12, bonus: BonusType.DoubleWord },
  { row: 3, column: 11, bonus: BonusType.DoubleWord },
  { row: 4, column: 10, bonus: BonusType.DoubleWord },
  { row: 10, column: 4, bonus: BonusType.DoubleWord },
  { row: 11, column: 3, bonus: BonusType.DoubleWord },
  { row: 12, column: 2, bonus: BonusType.DoubleWord },
  { row: 13, column: 1, bonus: BonusType.DoubleWord },
  { row: 10, column: 10, bonus: BonusType.DoubleWord },
  { row: 11, column: 11, bonus: BonusType.DoubleWord },
  { row: 12, column: 12, bonus: BonusType.DoubleWord },
  { row: 13, column: 13, bonus: BonusType.DoubleWord },
  { row: 1, column: 5, bonus: BonusType.TripleLetter },
  { row: 1, column: 9, bonus: BonusType.TripleLetter },
  { row: 13, column: 5, bonus: BonusType.TripleLetter },
  { row: 13, column: 9, bonus: BonusType.TripleLetter },
  { row: 5, column: 1, bonus: BonusType.TripleLetter },
  { row: 5, column: 5, bonus: BonusType.TripleLetter },
  { row: 5, column: 9, bonus: BonusType.TripleLetter },
  { row: 5, column: 13, bonus: BonusType.TripleLetter },
  { row: 9, column: 1, bonus: BonusType.TripleLetter },
  { row: 9, column: 5, bonus: BonusType.TripleLetter },
  { row: 9, column: 9, bonus: BonusType.TripleLetter },
  { row: 9, column: 13, bonus: BonusType.TripleLetter },
  { row: 1, column: 3, bonus: BonusType.DoubleLetter },
  { row: 1, column: 11, bonus: BonusType.DoubleLetter },
  { row: 14, column: 3, bonus: BonusType.DoubleLetter },
  { row: 14, column: 11, bonus: BonusType.DoubleLetter },
  { row: 2, column: 6, bonus: BonusType.DoubleLetter },
  { row: 2, column: 8, bonus: BonusType.DoubleLetter },
  { row: 12, column: 6, bonus: BonusType.DoubleLetter },
  { row: 12, column: 8, bonus: BonusType.DoubleLetter },
  { row: 3, column: 0, bonus: BonusType.DoubleLetter },
  { row: 3, column: 7, bonus: BonusType.DoubleLetter },
  { row: 3, column: 14, bonus: BonusType.DoubleLetter },
  { row: 11, column: 0, bonus: BonusType.DoubleLetter },
  { row: 11, column: 7, bonus: BonusType.DoubleLetter },
  { row: 11, column: 14, bonus: BonusType.DoubleLetter },
  { row: 6, column: 2, bonus: BonusType.DoubleLetter },
  { row: 6, column: 6, bonus: BonusType.DoubleLetter },
  { row: 6, column: 8, bonus: BonusType.DoubleLetter },
  { row: 6, column: 12, bonus: BonusType.DoubleLetter },
  { row: 8, column: 2, bonus: BonusType.DoubleLetter },
  { row: 8, column: 6, bonus: BonusType.DoubleLetter },
  { row: 8, column: 8, bonus: BonusType.DoubleLetter },
  { row: 8, column: 12, bonus: BonusType.DoubleLetter },
  { row: 7, column: 3, bonus: BonusType.DoubleLetter },
  { row: 7, column: 11, bonus: BonusType.DoubleLetter },
  { row: 7, column: 7, bonus: BonusType.Start }
];

export const initialiseBoard = (): Cell[][] => {
  const board: Cell[][] = [];

  for (let row = 0; row < 15; row++) {
    const rowCells: Cell[] = [];

    for (let column = 0; column < 15; column++) {
      const cell: Cell = {
        bonus: bonusSquares.find(s => s.row === row && s.column === column)?.bonus,
//        tile: {letter: 'A', value: 1}
      }
      rowCells.push(cell);
    }

    board.push(rowCells);
  }

  // board[7][5].tile = {letter: 'S', value: 1};
  // board[7][6].tile = {letter: 'A', value: 1};
  // board[7][7].tile = {letter: 'N', value: 1};
  // board[7][8].tile = {letter: 'D', value: 1};
  // board[7][9].tile = {letter: 'Y', value: 1};
  return board;
}
