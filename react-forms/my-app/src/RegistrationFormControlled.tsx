import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log({ username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input
        id="username"
        name="username"
        onChange={(e) => setUsername(e.target.value)}></input>
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}></input>
      <button>Sign Up</button>
    </form>
  );
}
