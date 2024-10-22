import { useEffect, useState } from 'react';
import './App.css';
import { Buttons } from './Buttons';
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import { ImageDisplay } from './ImageDisplay';
import '../public/images/fushiguro.webp';
import '../public/images/inumaki.webp';
import '../public/images/itadori.webp';
import '../public/images/kugisaki.webp';
import '../public/images/panda.webp';
import '../public/images/zen-in.webp';

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    {
      src: '/images/fushiguro.webp',
      alt: 'Megumi Fushiguro',
    },
    {
      src: '/images/inumaki.webp',
      alt: 'Toge Inumaki',
    },
    {
      src: '/images/itadori.webp',
      alt: 'Yuji Itadori',
    },
    {
      src: '/images/kugisaki.webp',
      alt: 'Nobara Kugisaki',
    },
    {
      src: '/images/panda.webp',
      alt: 'Panda',
    },
    {
      src: '/images/zen-in.webp',
      alt: "Maki Zen'in",
    },
  ];
  // useEffect(() => {
  //   const intervalId = setInterval(setImageIndex(imageIndex + 1), 1000);
  // }, []);
  const selectorButtons = images.map((_, index) => {
    return (
      <Buttons
        key={index}
        onClick={() => handleSelect(index)}
        appearance={imageIndex === index ? <FaCircle /> : <FaRegCircle />}
      />
    );
  });
  function handleNext() {
    if (imageIndex >= images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }
  function handlePrev() {
    if (imageIndex <= 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }
  function handleSelect(index: number) {
    if (index !== imageIndex) {
      setImageIndex(index);
    }
  }
  return (
    <>
      <Buttons onClick={handlePrev} appearance={<FaChevronCircleLeft />} />
      <ImageDisplay
        src={`../public${images[imageIndex].src}`}
        alt={images[imageIndex].alt}
        className="display-image"
      />
      <Buttons onClick={handleNext} appearance={<FaChevronCircleRight />} />

      <br />
      {selectorButtons}
    </>
  );
}

export default App;
