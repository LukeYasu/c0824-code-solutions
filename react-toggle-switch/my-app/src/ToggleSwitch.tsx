import { useState } from 'react';
import './App.css';

export function ToggleSwitch() {
  const [toggle, setToggle] = useState('switch-container-off');

  return (
    <>
      <div className="container">
        <div className={toggle}>
          <div
            onClick={() => {
              toggle === 'switch-container-off'
                ? setToggle('switch-container-on')
                : setToggle('switch-container-off');
            }}
            className="switch"></div>
        </div>
      </div>
    </>
  );
}
