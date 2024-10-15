import { useState } from 'react';

type Props = {
  caption: string[];
};

export function ImageCaption({ caption }: Props) {
  const [captionIndex, setCaptionIndex] = useState(0);
  function handleClick() {
    if (captionIndex >= caption.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }
  return (
    <div>
      <h3 onClick={handleClick}>{caption[captionIndex]}</h3>
    </div>
  );
}
