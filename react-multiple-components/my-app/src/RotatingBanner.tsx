import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

export function RotatingBanner() {
  const [index, setIndex] = useState(0);
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  function handleNext() {
    if (index > items.length - 2) {
      setIndex(0);
    } else setIndex(index + 1);
  }
  function handlePrev() {
    if (index === 0) {
      setIndex(items.length - 1);
    } else setIndex(index - 1);
  }
  function handleClick(selectedIndex: number) {
    setIndex(selectedIndex);
  }
  return (
    <>
      <Banner item={items[index]} />
      <NextButton handleNext={handleNext} />
      <br />
      <br />
      <Indicators
        itemsLength={items.length}
        index={index}
        onClick={handleClick}
      />
      <br />
      <PrevButton handlePrev={handlePrev} />
    </>
  );
}
