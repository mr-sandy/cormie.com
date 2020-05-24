import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import MyImage from '../stuff/MyImage';
import { defaultImage, getImageFromKey } from '../stuff/images';

const Home: NextPage = () => {
  const [image, setImage] = useState(defaultImage);

  const downHandler = (e: KeyboardEvent) => {
    const newImage: MyImage | undefined = getImageFromKey(e.keyCode, image);
    if (newImage) {
      e.preventDefault();
      setImage(newImage);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => window.removeEventListener("keydown", downHandler);
  }, [downHandler]);

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
      <img src={`./${image.name}`} />
    </>
  );
}

// Home.getInitialProps = async () => {
//   return { message: 'centre-1' };
// };

export default Home;