import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
  }

  function handleCancel() {
    setIsOpen(false);
  }

  function handleDelete() {
    alert('You have deleted');
    setIsOpen(false);
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
