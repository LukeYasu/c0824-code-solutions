import { useState } from 'react';
import './App.css';

export function ToggleSwitch() {
  const [toggle, setToggle] = useState(true);
  let onOff = '';
  if (toggle) {
    onOff = 'on';
  } else {
    onOff = 'off';
  }
  return (
    <div className="container">
      <div className={onOff}>
        <div
          onClick={() => {
            toggle === true ? setToggle(false) : setToggle(true);
          }}
          className="switch"></div>
      </div>
      <div className="on-off-text">{onOff}</div>
    </div>
  );
}
