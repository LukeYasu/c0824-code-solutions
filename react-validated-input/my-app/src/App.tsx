import { ReactNode, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const checkMark = (
    <i className="green">
      &nbsp;
      <FaCheck />
    </i>
  );
  const timesMark = (
    <i className="red">
      &nbsp;
      <FaTimes />
    </i>
  );

  function handlePassword(): ReactNode {
    if (password.length === 0) {
      return timesMark;
    } else if (password.length < 8) {
      return timesMark;
    } else if (/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).+$/.test(password)) {
      return checkMark;
    } else {
      return timesMark;
    }
  }

  function validateInputText() {
    return password.length === 0
      ? 'a password is required.'
      : password.length < 8
      ? 'password is too short.'
      : /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).+$/.test(password)
      ? ''
      : /^(?=.*\d)(?=.*[A-Z]).+$/.test(password)
      ? 'password requires a symbol'
      : /^(?=.*[A-Z])(?=.*[!@#$%^&*()]).+$/.test(password)
      ? 'password requires a digit'
      : /^(?=.*\d)(?=.*[!@#$%^&*()]).+$/.test(password)
      ? 'password requires capital letter'
      : /[A-Z]/.test(password)
      ? 'password requires a digit and a symbol'
      : /[!@#$%^&*()]/.test(password)
      ? 'password requires a capital letter and a digit'
      : /\d/.test(password)
      ? 'password requires a capital letter and a symbol'
      : 'password requires a capital letter a digit and a symbol';
  }

  return (
    <>
      <label htmlFor="password">Password </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      <span>{handlePassword()}</span>
      <p className="error-message red">
        {validateInputText()}
        &nbsp;
      </p>
    </>
  );
}

export default App;
