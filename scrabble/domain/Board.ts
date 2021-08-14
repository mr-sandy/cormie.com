import { immerable } from "immer";
import { Cell, Orientation, Tile } from "./";

function initialiseCells(): Cell[][] {
  return [
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}]
  ];
}

class Board {
  [immerable] = true
  _cells: Cell[][];

  constructor() {
    this._cells = initialiseCells();
  }

  get cells(): Cell[][] {
    return this._cells;
  }

  placeTiles(row: number, column: number, orientation: Orientation, tiles: Tile[]): void {
    if (orientation === Orientation.Horizontal) {
      for (let i = 0; i < tiles.length; i++) {
        this.cells[row][column + i].tile = tiles[i];
      }
    }
  }
}

export { Board };