import { Board, Selection } from "../types";

const MIDDLE = 7;

export function findSelection(board: Board, row: number, column: number, permitHorizontal: boolean = true): Selection {

  if (permitHorizontal && row === MIDDLE && column >= 1 && column <= MIDDLE) {
    return {
      valid: true,
      startRow: row,
      endRow: row,
      startColumn: column,
      endColumn: column + 6
    } as Selection;
  }

  if (column === MIDDLE && row >= 1 && row <= MIDDLE) {
    return {
      valid: true,
      startRow: row,
      endRow: row + 6,
      startColumn: column,
      endColumn: column
    } as Selection;
  }

  return {
    valid: false,
    startRow: row,
    endRow: row,
    startColumn: column,
    endColumn: column
  } as Selection;
}