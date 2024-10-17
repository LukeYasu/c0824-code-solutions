import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input id="username" name="username"></input>
      <label htmlFor="password">password</label>
      <input id="password" type="password" name="password"></input>
      <button>Sign Up</button>
    </form>
  );
}
