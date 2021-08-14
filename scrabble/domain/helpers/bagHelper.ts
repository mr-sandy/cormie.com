import { Tile } from '..';

const values = {
  ' ': 0,
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10
};

const quantities = {
  ' ': 2,
  a: 9,
  b: 2,
  c: 2,
  d: 4,
  e: 12,
  f: 2,
  g: 3,
  h: 2,
  i: 9,
  j: 1,
  k: 1,
  l: 4,
  m: 2,
  n: 6,
  o: 8,
  p: 2,
  r: 6,
  q: 1,
  s: 4,
  t: 6,
  u: 4,
  v: 2,
  w: 2,
  y: 2,
  x: 1,
  z: 1
};

const getValue = (letter: string): number => {
  const entry = Object.entries(values).find(e => e[0] === letter);
  return entry?.[1] || 0;
}

const makeTiles = (letter: string, value: number, quantity: number): Tile[] => {

  const tiles: Tile[] = [];

  for (let i = 0; i < quantity; i++) {
    tiles.push({
      letter: letter,
      value: value
    });
  }

  return tiles;
}

function shuffle<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export const initialiseBag = (): Tile[] => {

  const bag = Object.entries(quantities).reduce((soFar: Tile[], q: [string, number]) => {

    const letter = q[0];
    const value = getValue(letter);
    const quantity = q[1];
    const tiles = makeTiles(letter, value, quantity);

    return [
      ...soFar,
      ...tiles
    ];
  }, [])

  shuffle(bag)

  return bag;
}