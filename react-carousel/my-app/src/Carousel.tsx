import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import { Buttons } from './Buttons';
import { ImageDisplay } from './ImageDisplay';
import { useEffect, useState } from 'react';

type Props = {
  images: { src: string; alt: string }[];
};

export function Carousel({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  // const callback = useCallback(() => imageIndex, []);
  useEffect(() => {
    const intervalId = setTimeout(
      () => setImageIndex((prev) => (prev >= images.length - 1 ? 0 : prev + 1)),
      1000
    );
    return () => clearTimeout(intervalId);
  }, [imageIndex]);
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
