# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  hooks are functions that allow you to use state across components
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  they have to start at the top of your components and cannot be used anywhere else within other functions or conditions and start with 'use'
- What is the purpose of state in React?
  state keeps the data inside your component and its value is able to be stored even if it is changed and when that happens, the component rerenders.
- Why can't we just maintain state in a local variable?
  because it will not rerender the component when the state/variable changes
- What two actions happen when you call a `state setter` function?
  you update the state variable and rerender the component
- When does the local `state variable` get updated with the new value?
  whenever we call the state setter and pass an argument through it

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
