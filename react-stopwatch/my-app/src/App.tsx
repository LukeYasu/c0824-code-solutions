import { useState } from 'react';
import './App.css';
import { FaPlay, FaPause } from 'react-icons/fa';
// import { ReactionTime } from './ReactionTime';

function App() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  function handleClick() {
    if (!intervalId) {
      const intervalId = setInterval(
        () => setElapsedSeconds((prev) => prev + 1),
        1000
      );
      setIntervalId(intervalId);
    } else {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }
  function handleStopwatchClick() {
    if (!intervalId) {
      setElapsedSeconds(0);
    }
  }
  return (
    <div className="container">
      <div className="stopwatch" onClick={handleStopwatchClick}>
        {elapsedSeconds}
      </div>
      <div className="start-stop" onClick={handleClick}>
        {intervalId ? <FaPause /> : <FaPlay />}
      </div>
    </div>
  );
  // return <ReactionTime />;
}

export default App;
