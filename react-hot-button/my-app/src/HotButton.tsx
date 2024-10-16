import { useState } from 'react';
import './App.css';

export function HotButton() {
  const [clicks, setClicks] = useState(0);
  const [buttonColor, setButtonColor] = useState('black');

  function handleClick() {
    setClicks(clicks + 1);
    switch (true) {
      case clicks <= 3:
        setButtonColor('purple');
        break;
      case clicks <= 6:
        setButtonColor('light-purple');
        break;
      case clicks <= 9:
        setButtonColor('red');
        break;
      case clicks <= 12:
        setButtonColor('orange');
        break;
      case clicks <= 15:
        setButtonColor('yellow');
        break;
      case clicks <= 18:
        setButtonColor('white');
        break;
      case clicks > 18:
        setButtonColor('blue');
        break;
    }
  }
  return (
    <>
      <button onClick={handleClick} className={buttonColor}>
        Button
      </button>
      <p>{clicks}</p>
    </>
  );
}
