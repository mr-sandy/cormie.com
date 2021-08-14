import { reducer, getInitialState } from '../reducer';
import { GameState } from '../types';
import { ActionTypes, Action } from '../actions';
import { Game } from '../domain';

describe('Before anything happens', () => {
  const state: Game = getInitialState();

  it('should have game state of setting up', () => {
    expect(state.gameState).toBe(GameState.SettingUp);
  });

  it('should have a full bag', () => {
    expect(state.bag).toHaveLength(100);
  });
});


describe('When adding a player', () => {
  const state: Game = getInitialState();
  const action: Action = { type: ActionTypes.ADD_PLAYER, name: 'Player 1' };

  const result = reducer(state, action);

  it('should include the new player in the list', () => {
    expect(result.players).toHaveLength(1);
    expect(result.players[0].name).toBe('Player 1');
  });
});

describe('when starting a game', () => {
  const state: Game = getInitialState();
  state.addPlayer('Player one');
  state.addPlayer('Player two');

  const action: Action = { type: ActionTypes.START_GAME };

  const result = reducer(state, action);

  it('should set the game state to started', () => {
    expect(result.gameState).toBe(GameState.Started);
  });

  it('should give each current player seven tiles', () => {
    expect(result.players[0].tiles).toHaveLength(7);
    expect(result.players[1].tiles).toHaveLength(7);
  });

  // it('should remove players\' tiles from bag', () => {
  //   expect(result.bag.length).toBe(86);
  // });

});

// describe('when using initialState', () => {
//   it('should have state of SettingUp', () => {
//     expect(initialState.gameState).toBe(GameState.SettingUp);
//   });

//   it('should fill the bag with 100 tiles', () => {
//     expect(initialState.bag).toHaveLength(100);
//   });

//   it('should have no players', () => {
//     expect(initialState.players).toHaveLength(0);
//   });

//   it('should have a board', () => {
//     expect(initialState.board).toHaveLength(15);
//   });
// });

// describe('when setting up a new game', () => {
//   const state: AppState = {
//     ...initialState,
//     gameState: GameState.Started,
//     bag: initialState.bag.slice(50)
//   };

//   const action: Action = { type: ActionTypes.NEW_GAME };

//   const result = reducer(state, action);

//   it('should reset the game state', () => {
//     expect(result.gameState).toBe(GameState.SettingUp);
//   });

//   it('should refill the bag with 100 tiles', () => {
//     expect(result.bag).toHaveLength(100);
//   });

//   it('should have no players', () => {
//     expect(initialState.players).toHaveLength(0);
//   });
// });

// describe('when adding a new player', () => {
//   const state: AppState = initialState;

//   const action: Action = { type: ActionTypes.ADD_PLAYER, name: 'Player 1' };

//   const result = reducer(state, action);

//   it('should add the player', () => {
//     expect(result.players).toHaveLength(1);
//     expect(result.players[0].name).toBe('Player 1');
//   });
// });

// describe('when starting a game', () => {
//   const state: AppState = {
//     ...initialState,
//     players: [
//       { name: 'player one', tiles: [], score: 0 },
//       { name: 'player two', tiles: [], score: 0 }
//     ]
//   };

//   const action: Action = { type: ActionTypes.START_GAME };

//   const result = reducer(state, action);

//   it('should set the current player (index) to zero', () => {
//     expect(result.currentPlayer).toBe(0);
//   });

//   it('should give each current player seven tiles', () => {
//     expect(result.players[0].tiles).toHaveLength(7);
//     expect(result.players[1].tiles).toHaveLength(7);
//   });

//   it('should remove players\' tiles from bag', () => {
//     expect(result.bag.length).toBe(86);
//   });

// });

// describe('when selecting a cell', () => {
//   describe('when there is no existing selection', () => {
//     describe('and the selection includes the start cell', () => {

//       const state: AppState = {
//         ...initialState
//       };

//       const action: Action = {
//         type: ActionTypes.SELECT_CELL,
//         row: 7,
//         column: 7
//       };

//       const result = reducer(state, action);

//       const { selection } = result;

//       it('should set a valid selection', () => {
//         expect(selection?.valid).toBe(true);
//       });
//     });

//     describe('and the selection does not include the start cell', () => {

//       const state: AppState = {
//         ...initialState
//       };

//       const action: Action = {
//         type: ActionTypes.SELECT_CELL,
//         row: 6,
//         column: 6
//       };

//       const result = reducer(state, action);

//       const { selection } = result;

//       it('should set a invalid selection', () => {
//         expect(selection?.valid).toBe(false);
//       });
//     });
//   });

//   describe('when there is an existing selection', () => {
//     describe('and the new selection starts on the same start cell', () => {
//       describe('and the existing selection is horizontal and a vertical selection is possible', () => {
//         const state: AppState = {
//           ...initialState,
//           selection: {
//             startRow: 7,
//             endRow: 7,
//             startColumn: 7,
//             endColumn: 13,
//             valid: true
//           }
//         };

//         const action: Action = {
//           type: ActionTypes.SELECT_CELL,
//           row: 7,
//           column: 7
//         };

//         const result = reducer(state, action);

//         const { selection } = result;

//         it('should return a vertical selection', () => {
//           expect(selection?.startRow).toBe(7);
//           expect(selection?.endRow).toBe(13);
//           expect(selection?.startColumn).toBe(7);
//           expect(selection?.endColumn).toBe(7);
//           expect(selection?.valid).toBe(true);
//         });
//       });

//       describe('and the existing selection is horizontal and a vertical selection is not possible', () => {
//         const state: AppState = {
//           ...initialState,
//           selection: {
//             startRow: 7,
//             endRow: 7,
//             startColumn: 6,
//             endColumn: 12,
//             valid: true
//           }
//         };

//         const action: Action = {
//           type: ActionTypes.SELECT_CELL,
//           row: 7,
//           column: 6
//         };

//         const result = reducer(state, action);

//         const { selection } = result;

//         it('should retain the horizontal selection', () => {
//           expect(selection?.startRow).toBe(7);
//           expect(selection?.endRow).toBe(7);
//           expect(selection?.startColumn).toBe(6);
//           expect(selection?.endColumn).toBe(12);
//           expect(selection?.valid).toBe(true);
//         });

//       });
//     });
//   });
// });

// describe('when selecting a tile', () => {
//   const state: AppState = {
//     ...initialState,
//     players: [
//       { name: 'player one', tiles: [{ letter: 'a', value: 1 }, { letter: 'a', value: 1 }, { letter: 'b', value: 1 }, { letter: 'c', value: 1 }], score: 0 },
//       { name: 'player two', tiles: [{ letter: 'a', value: 1 }, { letter: 's', value: 1 }, { letter: 'd', value: 1 }, { letter: 'f', value: 1 }], score: 0 }
//     ]
//   };

//   const action: Action = {
//     type: ActionTypes.SELECT_TILE,
//     tile: state.players[0].tiles[1],
//     player: 0
//   };

//   const result = reducer(state, action);

//   it('should set add the tile to the current turn\'s candidate word', () => {
//     expect(result.candidateWord).toEqual([{ letter: 'a', value: 1 }]);
//   });
// });

// describe('when selecting a cell', () => {

//   // describe('when there is no current selection (and exceeds horizontal bounds)', () => {

//   //   const state: AppState = {
//   //     ...initialState
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 5, column: 10 };

//   //   const result = reducer(state, action);

//   //   it('should set the selection as horizontal', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(5);
//   //     expect(result.selection?.endRow).toBe(5);
//   //     expect(result.selection?.startColumn).toBe(10);
//   //     expect(result.selection?.endColumn).toBe(14);
//   //   });
//   // });

//   // describe('when it matches the current horizontal selection', () => {

//   //   const state: AppState = {
//   //     ...initialState,
//   //     selection: {
//   //       startRow: 5,
//   //       endRow: 5,
//   //       startColumn: 6,
//   //       endColumn: 14
//   //     }
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 5, column: 6 };

//   //   const result = reducer(state, action);

//   //   it('should set the selection as vertical', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(5);
//   //     expect(result.selection?.endRow).toBe(12);
//   //     expect(result.selection?.startColumn).toBe(6);
//   //     expect(result.selection?.endColumn).toBe(6);
//   //   });
//   // });

//   // describe('when it matches the current horizontal selection (and exceeds vertical bounds)', () => {

//   //   const state: AppState = {
//   //     ...initialState,
//   //     selection: {
//   //       startRow: 9,
//   //       endRow: 9,
//   //       startColumn: 10,
//   //       endColumn: 14
//   //     }
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 9, column: 10 };

//   //   const result = reducer(state, action);

//   //   it('should set the selection as vertical', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(9);
//   //     expect(result.selection?.endRow).toBe(14);
//   //     expect(result.selection?.startColumn).toBe(10);
//   //     expect(result.selection?.endColumn).toBe(10);
//   //   });
//   // });

//   // describe('when it matches the current vertical selection', () => {

//   //   const state: AppState = {
//   //     ...initialState,
//   //     selection: {
//   //       startRow: 5,
//   //       endRow: 12,
//   //       startColumn: 6,
//   //       endColumn: 6
//   //     }
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 5, column: 6 };

//   //   const result = reducer(state, action);

//   //   it('should set the selection as horizontal', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(5);
//   //     expect(result.selection?.endRow).toBe(5);
//   //     expect(result.selection?.startColumn).toBe(6);
//   //     expect(result.selection?.endColumn).toBe(13);
//   //   });
//   // });

//   // describe('when it matches the current vertical selection (and exceeds horizontal bounds)', () => {

//   //   const state: AppState = {
//   //     ...initialState,
//   //     selection: {
//   //       startRow: 9,
//   //       endRow: 14,
//   //       startColumn: 10,
//   //       endColumn: 10
//   //     }
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 9, column: 10 };

//   //   const result = reducer(state, action);

//   //   it('should set the selection as horizontal', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(9);
//   //     expect(result.selection?.endRow).toBe(9);
//   //     expect(result.selection?.startColumn).toBe(10);
//   //     expect(result.selection?.endColumn).toBe(14);
//   //   });
//   // });

//   // describe('when it does not match the current selection', () => {

//   //   const state: AppState = {
//   //     ...initialState,
//   //     selection: {
//   //       startRow: 4,
//   //       endRow: 4,
//   //       startColumn: 6,
//   //       endColumn: 14
//   //     }
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 5, column: 6 };

//   //   const result = reducer(state, action);

//   //   it('should set the new selection as horizontal', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(5);
//   //     expect(result.selection?.endRow).toBe(5);
//   //     expect(result.selection?.startColumn).toBe(6);
//   //     expect(result.selection?.endColumn).toBe(13);
//   //   });
//   // });

//   // describe('when it does not match the current selection (and exceeds horizontal bounds)', () => {

//   //   const state: AppState = {
//   //     ...initialState,
//   //     selection: {
//   //       startRow: 4,
//   //       endRow: 4,
//   //       startColumn: 6,
//   //       endColumn: 14
//   //     }
//   //   };

//   //   const action: Action = { type: ActionTypes.SELECT_CELL, row: 9, column: 10 };

//   //   const result = reducer(state, action);

//   //   it('should set the new selection as horizontal', () => {
//   //     expect(result.selection).not.toBeUndefined();
//   //     expect(result.selection?.startRow).toBe(9);
//   //     expect(result.selection?.endRow).toBe(9);
//   //     expect(result.selection?.startColumn).toBe(10);
//   //     expect(result.selection?.endColumn).toBe(14);
//   //   });
//   // });

// });