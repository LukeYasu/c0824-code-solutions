import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export function App() {
  const [isOpen, SetIsOpen] = useState(false);
  function handleClick() {
    SetIsOpen(true);
  }

  function handleCancel() {
    SetIsOpen(false);
  }

  function handleDelete() {
    alert('You have deleted');
    SetIsOpen(false);
  }

  return (
    <>
      <button onClick={handleClick}>Delete Me!</button>
      <Modal isOpen={isOpen}>
        <p>Do you really want to delete?</p>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
