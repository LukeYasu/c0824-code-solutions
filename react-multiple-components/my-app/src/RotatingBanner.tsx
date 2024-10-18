import { useState } from 'react';
import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

export function RotatingBanner() {
  const [items, setItems] = useState([
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ]);
  const [index, setIndex] = useState(0);
  return (
    <>
      <Banner item={items[index]} />
      <NextButto />
      <br />
      <br />
      <Indicators items={items} index={index} />
      <br />
      <PrevButton />
    </>
  );
}
