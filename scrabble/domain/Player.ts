import { immerable } from "immer";
import { Tile } from ".";

class Player {
  [immerable] = true
  name: string;
  tiles: Tile[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

export { Player };
