import MyImage from './MyImage';
import { Key } from 'ts-keycode-enum';


const centre1: MyImage = {
  name: 'centre-1.jpg'
};

const left1: MyImage = {
  name: 'left-1.jpg'
};

const left2: MyImage = {
  name: 'left-2.jpg'
};

const left3: MyImage = {
  name: 'left-3.jpg'
};

const left4: MyImage = {
  name: 'left-4.jpg'
};

const left5: MyImage = {
  name: 'left-5.jpg'
};

const left6: MyImage = {
  name: 'left-6.jpg'
};

const right0: MyImage = {
  name: 'right-0.jpg'
};

const right1: MyImage = {
  name: 'right-1.jpg'
};

const right2: MyImage = {
  name: 'right-2.jpg'
};

const right3: MyImage = {
  name: 'right-3.jpg'
};

const right4: MyImage = {
  name: 'right-4.jpg'
};

const right5: MyImage = {
  name: 'right-5.jpg'
};

const right6: MyImage = {
  name: 'right-6.jpg'
};

const down1: MyImage = {
  name: 'down-1.jpg'
};

const down2: MyImage = {
  name: 'down-2.jpg'
};

const down3: MyImage = {
  name: 'down-3.jpg'
};

const down4: MyImage = {
  name: 'down-4.jpg'
};

const down5: MyImage = {
  name: 'down-5.jpg'
};

const down6: MyImage = {
  name: 'down-6.jpg'
};

const up1: MyImage = {
  name: 'up-1.jpg'
};

const up2: MyImage = {
  name: 'up-2.jpg'
};

const up3: MyImage = {
  name: 'up-3.jpg'
};

const up4: MyImage = {
  name: 'up-4.jpg'
};

const up5: MyImage = {
  name: 'up-5.jpg'
};

const aargh1: MyImage = {
  name: 'aargh1.jpg'
};

const aargh2: MyImage = {
  name: 'aargh2.jpg'
};

const aargh3: MyImage = {
  name: 'aargh3.jpg'
};

const cry1: MyImage = {
  name: 'cry.jpg'
};

const cry2: MyImage = {
  name: 'cry2.jpg'
};

const cry3: MyImage = {
  name: 'cry3.jpg'
};

const eh: MyImage = {
  name: 'eh.jpg'
};

const gasp: MyImage = {
  name: 'gasp.jpg'
};

const grr: MyImage = {
  name: 'grr.jpg'
};

const grr2: MyImage = {
  name: 'grr2.jpg'
};

const hmph: MyImage = {
  name: 'hmph.jpg'
};

const ooh: MyImage = {
  name: 'ooh.jpg'
};

const sad: MyImage = {
  name: 'sad.jpg'
};

const scream: MyImage = {
  name: 'scream.jpg'
};

const smile: MyImage = {
  name: 'smile.jpg'
};

const smile2: MyImage = {
  name: 'smile2.jpg'
};

const smile3: MyImage = {
  name: 'smile3.jpg'
};

const youwhat: MyImage = {
  name: 'youwhat.jpg'
};

centre1.left = left1;
centre1.right = right0;
centre1.below = down1;
centre1.above = up1;

left1.left = left2;
left1.right = centre1;

left2.left = left3;
left2.right = left1;

left3.left = left4;
left3.right = left2;

left4.left = left5;
left4.right = left3;

left5.left = left6;
left5.right = left4;

left6.right = left5;

right0.right = right1;
right0.left = centre1;

right1.right = right2;
right1.left = right0;

right2.right = right3;
right2.left = right1;

right3.right = right4;
right3.left = right2;

right4.right = right5;
right4.left = right3;

right5.right = right6;
right5.left = right4;

right6.left = right5;

down1.below = down2;
down1.above = centre1;

down2.below = down3;
down2.above = down1;

down3.below = down4;
down3.above = down2;

down4.below = down5;
down4.above = down3;

down5.below = down6;
down5.above = down4;

down6.above = down5;

up1.above = up2;
up1.below = centre1;

up2.above = up3;
up2.below = up1;

up3.above = up4;
up3.below = up2;

up4.above = up5;
up4.below = up3;

up5.below = up3;

const moveLeft = (i: MyImage) => (!i.left && !i.right)
  ? centre1
  : i.left ? i.left : i;

const moveRight = (i: MyImage) => (!i.left && !i.right)
  ? centre1
  : i.right ? i.right : i;

const moveUp = (i: MyImage) => (!i.above && !i.below)
  ? centre1
  : i.above ? i.above : i;

const moveDown = (i: MyImage) => (!i.above && !i.below)
  ? centre1
  : i.below ? i.below : i;

export function getImageFromKey(keyCode: number, i: MyImage): MyImage | undefined {
  switch (keyCode) {
    case Key.LeftArrow: // arrow left
      return moveLeft(i);

    case Key.UpArrow: // arrow up
      return moveUp(i);

    case Key.RightArrow: // arrow right
      return moveRight(i);

    case Key.DownArrow: // arrow down
      return moveDown(i);

    case Key.Q: // q
      return smile;

    case Key.W: // w
      return aargh1;

    case Key.E: // e
      return aargh2;

    case Key.R: // r
      return aargh3;

    case Key.T: // t
      return cry1;

    case Key.Y: // y
      return cry2;

    case Key.U: // u
      return cry3;

    case Key.I: // i
      return eh;

    case Key.O: // o
      return gasp;

    case Key.P: // p
      return grr;

    case Key.A: // a
      return grr2;

    case Key.S: // s
      return smile2;

    case Key.D: // d
      return hmph;

    case Key.F: // f
      return ooh;

    case Key.G: // g
      return sad;

    case Key.H: // h
      return scream;

    case Key.J: // j
      return smile3;

    case Key.K: // k
      return youwhat;

    default:
      break;
  }
};

export const defaultImage = centre1;