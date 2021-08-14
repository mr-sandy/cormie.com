import { reducer, getInitialState } from './reducer';
import React, { useReducer, Dispatch } from 'react';
import { Action } from './actions';
import produce from 'immer';
import { Game } from './domain';

const DispatchContext = React.createContext<Dispatch<Action> | undefined>(undefined);
const StateContext = React.createContext<Game | undefined>(undefined);

type CountProviderProps = { children: React.ReactNode }

function Provider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer( produce(reducer), getInitialState());
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within a CountProvider')
  }
  return context
}
function useAppDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a CountProvider')
  }
  return context
}

export { Provider, useAppState, useAppDispatch };