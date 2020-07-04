import { useAppState } from "../Provider";
import { GameState } from "../types";
import SetUp from "./SetUp";

function GameStateDisplay() {
  const { gameState } = useAppState();

  switch (gameState) {
    // case GameState.NoGame:
    //   return <h1>No Game</h1>

    case GameState.SettingUp:
      return <>
      <h1>Setting Up!</h1>
      <SetUp />
      </>

    case GameState.Started:
      return <h1>Started</h1>

    default:
      return <h1>ERROR!!</h1>
  }
}

export default GameStateDisplay;