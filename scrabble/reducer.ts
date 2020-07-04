import { AppState, GameState } from './types';
import { Action, ActionTypes } from './actions';
import { initialiseBoard, initialiseBag } from './helpers';
import { Dispatch } from 'react';

export const initialState: AppState = {
  gameState: GameState.SettingUp,
  board: initialiseBoard(),
  bag: initialiseBag(),
  players: [],
  currentPlayer: undefined
};

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case ActionTypes.NEW_GAME:
      return {
        ...initialState,
        gameState: GameState.SettingUp
      };

    case ActionTypes.ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.name,
            tiles: [],
            score: 0
          }
        ]
      };

    case ActionTypes.START_GAME: {
      return {
        ...state,
        gameState: GameState.Started,
        players: state.players.map((player, i) =>
          ({
            ...player,
            tiles: state.bag.slice(i, i + 7)
          })),
        bag: state.bag.slice(state.players.length * 7),
        currentPlayer: state.players.length > 0 ? 0 : undefined
      }
    }

    default:
      throw new Error();
  }
}
