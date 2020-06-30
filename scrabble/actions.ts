export enum ActionTypes {
  NEW_GAME = 'NEW_GAME',
  ADD_PLAYER = 'ADD_PLAYER',
  START_GAME = 'START_GAME'
};

export type Action =
  { type: ActionTypes.NEW_GAME } |
  { type: ActionTypes.ADD_PLAYER, name: string } |
  { type: ActionTypes.START_GAME };

export const newGame = (): Action => ({
  type: ActionTypes.NEW_GAME
});

export const addPlayer = (name: string): Action => ({
  type: ActionTypes.ADD_PLAYER,
  name
});

export const startGame = (): Action => ({
  type: ActionTypes.START_GAME
});
