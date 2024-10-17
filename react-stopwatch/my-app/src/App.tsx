import { useState } from 'react';
import './App.css';
import { FaPlay, FaPause } from 'react-icons/fa';

function App() {
  // const [elapsedTime, setElapsedTime] = useState(0);
  const [play, setPlay] = useState(false);
  const elapsedTime = 0;
  let buttonIcon = <FaPlay />;

  function handleClick() {
    setPlay(!play);
    if (play) {
      setInterval(() => elapsedTime + 1, 1000);
      buttonIcon = <FaPause />;
    } else {
      buttonIcon = <FaPlay />;
    }
  }

  return (
    <div className="container">
      <div className="stopwatch">{elapsedTime}</div>
      <div className="button" onClick={handleClick}>
        {buttonIcon}
      </div>
    </div>
  );
}

export default App;
