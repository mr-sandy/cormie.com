import { GameState, Player, Tile } from ".";
import { initialiseBag } from "./helpers/bagHelper";

class Game {
  gameState: GameState = GameState.SettingUp;
  players: Player[] = [];
  bag: Tile[] = initialiseBag();

  startGame() {
    this.gameState = GameState.Started;
    this.players.forEach(player => {
      player.tiles = this.bag.splice(0, 7)
    });
  }

  addPlayer(name: string) {
    this.players.push(new Player(name))
  }

}

export { Game };
