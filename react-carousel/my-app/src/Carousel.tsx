import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import { Buttons } from './Buttons';
import { ImageDisplay } from './ImageDisplay';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  images: { src: string; alt: string }[];
};

export function Carousel({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = useCallback(() => {
    if (imageIndex >= images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }, [images.length, imageIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => handleNext(), 3000);
    return () => clearTimeout(timeoutId);
  }, [handleNext]);

  const selectorButtons = images.map((_, index) => {
    return (
      <Buttons
        key={index}
        onClick={() => handleSelect(index)}
        appearance={imageIndex === index ? <FaCircle /> : <FaRegCircle />}
      />
    );
  });

  function handlePrev() {
    setImageIndex((prev) => (prev <= 0 ? images.length - 1 : imageIndex - 1));
  }

  function handleSelect(index: number) {
    setImageIndex(index);
  }
  return (
    <>
      <Buttons onClick={handlePrev} appearance={<FaChevronCircleLeft />} />
      <ImageDisplay
        src={images[imageIndex].src}
        alt={images[imageIndex].alt}
        className="display-image"
      />
      <Buttons onClick={handleNext} appearance={<FaChevronCircleRight />} />
      <br />
      {selectorButtons}
    </>
  );
}
