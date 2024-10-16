import { useState } from 'react';
import './App.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);
  let onOff = '';
  let switchAppearance = '';
  if (isOn) {
    onOff = 'on';
    switchAppearance = 'on-container';
  } else {
    onOff = 'off';
    switchAppearance = 'off-container';
  }
  return (
    <div className="container">
      <div className={switchAppearance}>
        <div onClick={() => setIsOn(!isOn)} className="switch"></div>
      </div>
      <div className="on-off-text">{onOff}</div>
    </div>
  );
}
