import React, { useCallback, useEffect, useState } from 'react';
import * as images from "./images";
import useImagePreloader from './useImagePreloader';

// https://stackoverflow.com/questions/42615556/how-to-preload-images-in-react-js

const horizontalImages = [images.left6, images.left5, images.left4, images.left3, images.left2, images.left1, images.centre1, images.centre2, images.right0, images.right1, images.right2, images.right3, images.right4, images.right5, images.right6];

function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = img.onabort = function () {
      reject(src)
    }
    img.src = `/img/${src}`
  })
}
function App() {
  const [index, setIndex] = useState<number>(Math.trunc(horizontalImages.length / 2));
  const [assetsLoaded, setAssetsLoaded] = useState<boolean>(false)

  const { imagesPreloaded } = useImagePreloader(horizontalImages)

  // useEffect(() => {
  //   let isCancelled = false

  //   async function effect() {
  //     if (isCancelled) {
  //       return
  //     }

  //     const imagesPromiseList: Promise<any>[] = []
  //     for (const i of horizontalImages) {
  //       imagesPromiseList.push(preloadImage(i))
  //     }

  //     await Promise.all(imagesPromiseList)

  //     if (isCancelled) {
  //       return
  //     }

  //     setAssetsLoaded(true)
  //   }

  //   effect()

  //   return () => {
  //     isCancelled = true
  //   }
  // }, [])


  // useEffect(() => {
  //   const timer = setInterval(() => setIndex(i => (i + 1)), 1000);
  //   return () => clearInterval(timer);
  // }, []);


  // handle what happens on key press
  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowRight":
        setIndex(i => (i + 1) % horizontalImages.length);
        break;
      case "ArrowLeft":
        setIndex(i => ((i === 0) ? horizontalImages.length -1 : i - 1));
        break;
      default:
        console.log(e.key)
    }
  };

  // useEffect(() => {
  //   horizontalImages.forEach(img => new Image().src = img)
  // })

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${horizontalImages[index]})`;
  }, [index]);

  // if (!imagesPreloaded) {
  //   return <p>Preloading Assets</p>
  // }

  // return <p>Assets Finished Preloading</p>

  return (
    <div>{index}
    </div>
  );
}

export default App;
