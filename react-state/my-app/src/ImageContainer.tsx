import { useState } from 'react';
import './ImageContainer.css';

type Props = {
  src: string[];
};

export function ImageContainer({ src }: Props) {
  const [srcIndex, setSrcIndex] = useState(0);
  function handleClick() {
    if (srcIndex >= 2) {
      setSrcIndex(0);
    } else {
      setSrcIndex(srcIndex + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick}
          src={src[srcIndex]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
