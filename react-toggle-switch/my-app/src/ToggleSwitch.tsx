import { useState } from 'react';
import './App.css';

export function ToggleSwitch() {
  const [toggle, setToggle] = useState('off');

  return (
    <>
      <div className="container">
        <div className={toggle}>
          <div
            onClick={() => {
              toggle === 'off' ? setToggle('on') : setToggle('off');
            }}
            className="switch"></div>
        </div>
        <div className="on-off-text">{toggle}</div>
      </div>
    </>
  );
}
