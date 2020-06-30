import { reducer, initialState } from './reducer';
import React, { useReducer, Dispatch, useContext } from 'react';
import { Action } from './actions';
import { AppState } from './types';

const DispatchContext = React.createContext<Dispatch<Action> | undefined>(undefined);
const StateContext = React.createContext<AppState | undefined>(undefined);

type CountProviderProps = { children: React.ReactNode }

function Provider({ children }: CountProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
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