import { useState } from 'react';
import './App.css';

export function HotButton() {
  const [clicks, setClicks] = useState(0);
  let buttonColor = 'black';
  switch (true) {
    case clicks <= 3:
      buttonColor = 'purple';
      break;
    case clicks <= 6:
      buttonColor = 'light-purple';
      break;
    case clicks <= 9:
      buttonColor = 'red';
      break;
    case clicks <= 12:
      buttonColor = 'orange';
      break;
    case clicks <= 15:
      buttonColor = 'yellow';
      break;
    case clicks <= 18:
      buttonColor = 'white';
      break;
    case clicks > 18:
      buttonColor = 'blue';
      break;
  }
  function handleClick() {
    setClicks(clicks + 1);
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
