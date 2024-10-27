import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuItems = ['eggs', 'rice', 'beans', 'cabbage'];

  console.log('ref.current', buttonRef.current);
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
        Pop up!
      </button>
      <p>wabalubbadubdub</p>
      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={() => setIsOpen(false)}>
        {isOpen && (
          <ul className="border shadow-2xl bg-black list-none ">
            {menuItems.map((item) => (
              <li key={item} className="border">
                {item}
              </li>
            ))}
          </ul>
        )}
      </Popup>
      <p>popipopipopoipipipoipipopipo</p>
    </>
  );
}

export default App;
