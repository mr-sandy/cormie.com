import { reducer, initialState } from '../reducer';
import { AppState, GameState } from '../types';
import { ActionTypes, Action } from '../actions';

describe('when using initialState', () => {
  it('should have state of SettingUp', () => {
    expect(initialState.gameState).toBe(GameState.SettingUp);
  });

  it('should fill the bag with 100 tiles', () => {
    expect(initialState.bag).toHaveLength(100);
  });

  it('should have no players', () => {
    expect(initialState.players).toHaveLength(0);
  });

  it('should have a board', () => {
    expect(initialState.board).toHaveLength(15);
  });
});

describe('when setting up a new game', () => {
  const state: AppState = {
    ...initialState,
    gameState: GameState.Started,
    bag: initialState.bag.slice(50)
  };

  const action: Action = { type: ActionTypes.NEW_GAME };

  const result = reducer(state, action);

  it('should reset the game state', () => {
    expect(result.gameState).toBe(GameState.SettingUp);
  });

  it('should refill the bag with 100 tiles', () => {
    expect(result.bag).toHaveLength(100);
  });

  it('should have no players', () => {
    expect(initialState.players).toHaveLength(0);
  });
});


describe('when adding a new player', () => {
  const state: AppState = initialState;

  const action: Action = { type: ActionTypes.ADD_PLAYER, name: 'Player 1' };

  const result = reducer(state, action);

  it('should add the player', () => {
    expect(result.players).toHaveLength(1);
    expect(result.players[0].name).toBe('Player 1');
  });
});

describe('when starting a game', () => {
  const state: AppState = {
    ...initialState,
    players: [
      { name: 'player one', tiles: [], score: 0 },
      { name: 'player two', tiles: [], score: 0 }
    ]
  };

  const action: Action = { type: ActionTypes.START_GAME };

  const result = reducer(state, action);

  it('should set the current player (index) to zero', () => {
    expect(result.currentPlayer).toBe(0);
  });

  it('should give each current player seven tiles', () => {
    expect(result.players[0].tiles).toHaveLength(7);
    expect(result.players[1].tiles).toHaveLength(7);
  });

  it('should remove players\' tiles from bag', () => {
    expect(result.bag.length).toBe(86);
  });

});