import { Tile } from "./types";

export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  ADD_PLAYER = 'ADD_PLAYER',
  START_GAME = 'START_GAME',
  SELECT_CELL = 'SELECT_CELL',
  SELECT_TILE = 'SELECT_TILE',
};

export type Action =
  { type: ActionTypes.NEW_GAME } |
  { type: ActionTypes.ADD_PLAYER, name: string } |
  { type: ActionTypes.START_GAME } |
  { type: ActionTypes.SELECT_CELL, row: number, column: number} |
  { type: ActionTypes.SELECT_TILE, tile: Tile, player: number};
