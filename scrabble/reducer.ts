import { AppState, GameState } from './types';
import { Action, ActionTypes } from './actions';
import { initialiseBoard, initialiseBag } from './helpers';

export const initialState: AppState = {
  gameState: GameState.SettingUp,
  board: initialiseBoard(),
  bag: initialiseBag(),
  players: [],
  currentPlayer: 0,
  selection: undefined
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
        bag: state.bag.slice(state.players.length * 7)
      }
    };

    case ActionTypes.SELECT_CELL: {
      if (!state.selection) {
        return {
          ...state,
          selection: {
            startRow: action.row,
            endRow: action.row,
            startColumn: action.column,
            endColumn: Math.min(14, action.column + 7)
          }
        };
      }
      else {
        if (state.selection.startRow === action.row && state.selection.startColumn === action.column) {
          const isHorizontal = state.selection.startRow === state.selection.endRow;
          return {
            ...state,
            selection: {
              startRow: action.row,
              endRow: isHorizontal ? Math.min(14, action.row + 7) : action.row,
              startColumn: action.column,
              endColumn: isHorizontal ? action.column : Math.min(14, action.column + 7) 
            }
          };
        }
        else {
          return {
            ...state,
            selection: {
              startRow: action.row,
              endRow: action.row,
              startColumn: action.column,
              endColumn: Math.min(14, action.column + 7)
              }
          };
        }
      }
    }

    default:
      return state;
  }

  return state;
}
