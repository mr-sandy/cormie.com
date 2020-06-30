export enum GameState {
  NoGame,
  SettingUp,
  Started
}

export enum BonusType {
  DoubleLetter,
  TripleLetter,
  DoubleWord,
  TripleWord,
  Start
}

export type Tile = {
  letter: string;
  value: number;
}

export type Cell = {
  bonus?: BonusType,
  tile?: Tile
}

export type Board = Cell[][];

export type Player = {
  name: string,
  tiles: Tile[],
  score: number
}

export type AppState = {
  gameState: GameState;
  board: Board;
  bag: Tile[],
  players: Player[],
  currentPlayer?: number
};
