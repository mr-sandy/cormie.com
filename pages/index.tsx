import { useState, useEffect } from 'react';
import { NextPage } from 'next';

const keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90

}

interface MyImage {
  name: string;
  left?: MyImage;
  right?: MyImage;
  above?: MyImage;
  below?: MyImage;
}
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


const Home: NextPage = () => {
  const [image, setImage] = useState(centre1);


  useEffect(() => {
    console.log('======== DO THIS ONCE =========')

    const downHandler = (e: KeyboardEvent) => {
      switch (e.keyCode) {
        case keyCodes.left: // arrow left
          e.preventDefault();
          setImage(i => {
            if (!i.left && !i.right) {
              return centre1;
            }

            return i.left ? i.left : i;
          });
          break;
        case keyCodes.up: // arrow up
          e.preventDefault();
          setImage(i => {
            if (!i.above && !i.below) {
              return centre1;
            }

            return i.above ? i.above : i;
          });
          break;
        case keyCodes.right: // arrow right
          e.preventDefault();
          setImage(i => {
            if (!i.left && !i.right) {
              return centre1;
            }

            return i.right ? i.right : i;
          });
          break;
        case keyCodes.down: // arrow down
          e.preventDefault();
          setImage(i => {
            if (!i.above && !i.below) {
              return centre1;
            }

            return i.below ? i.below : i;
          });
          break;

        case keyCodes.q: // q
          e.preventDefault();
          setImage(() => smile);
          break;

        case keyCodes.w: // w
          e.preventDefault();
          setImage(() => aargh1);
          break;

        case keyCodes.e: // e
          e.preventDefault();
          setImage(() => aargh2);
          break;

        case keyCodes.r: // r
          e.preventDefault();
          setImage(() => aargh3);
          break;

        case keyCodes.t: // t
          e.preventDefault();
          setImage(() => cry1);
          break;

        case keyCodes.y: // y
          e.preventDefault();
          setImage(() => cry2);
          break;

        case keyCodes.u: // u
          e.preventDefault();
          setImage(() => cry3);
          break;

        case keyCodes.i: // i
          e.preventDefault();
          setImage(() => eh);
          break;

        case keyCodes.o: // o
          e.preventDefault();
          setImage(() => gasp);
          break;

        case keyCodes.p: // p
          e.preventDefault();
          setImage(() => grr);
          break;

        case keyCodes.a: // a
          e.preventDefault();
          setImage(() => grr2);
          break;

        case keyCodes.s: // s
          e.preventDefault();
          setImage(() => smile2);
          break;

        case keyCodes.d: // d
          e.preventDefault();
          setImage(() => hmph);
          break;

        case keyCodes.f: // f
          e.preventDefault();
          setImage(() => ooh);
          break;

        case keyCodes.g: // g
          e.preventDefault();
          setImage(() => sad);
          break;

        case keyCodes.h: // h
          e.preventDefault();
          setImage(() => scream);
          break;

        case keyCodes.j: // j
          e.preventDefault();
          setImage(() => smile3);
          break;

        case keyCodes.k: // k
          e.preventDefault();
          setImage(() => youwhat);
          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      <style jsx global>{`
@import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One&display=swap');
    body {
      padding: 0;
      margin: 0;
      font-family: 'Alfa Slab One', cursive;
      font-size: 24px;
    }`}
      </style>
      <style jsx>{`
    img {
      max-height: 100vh;
      display: block;
      margin: 0 auto;
    }
    
    h1 {
      display: block;
      position: absolute;
      font-weight: 50;
    }
    `}</style>
      <h1>Hello world! {image.name}</h1>
      <img src={`./${image.name}`} />
    </>
  );
}

// Home.getInitialProps = async () => {
//   return { message: 'centre-1' };
// };

export default Home;