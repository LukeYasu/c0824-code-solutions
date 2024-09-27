# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  they are used for creating an async function and the await keyword is used for waiting for asynchronous functions to be complete before moving on
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  they can both serve the same functionality but async functions are more readable and easier to understand
- When do you use `async`?
  before the function keyword of the function that you want to become an async function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  you use await when you want to wait for the promise object to return something and you do not use await to be able to see what state it is in.
- How do you handle errors with `await`?
  with catch{}
- What do `try`, `catch` and `throw` do? When do you use them?

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it gets the state of the promise such as pending because it dod not wait for it to finish
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
