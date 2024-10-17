import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { IconType } from 'react-icons';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  function handlePassword(valid: string | IconType, notValid: string): string {
    return password.length === 0
      ? notValid
      : password.length < 8
      ? notValid
      : /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()]).+$/.test(password)
      ? valid
      : notValid;
  }
  return (
    <>
      <label htmlFor="password">Password </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
      <i className={handlePassword('green', 'red')}>
        &nbsp;{handlePassword(<FaCheck />, <FaTimes />)}
      </i>
      <p className="error-message red">
        {password.length === 0
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
          : 'password requires a capital letter a digit and a symbol'}
        &nbsp;
      </p>
    </>
  );
}

export default App;
