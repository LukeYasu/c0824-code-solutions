# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  the component is mounted to the dom after it is committed
- What is a React Effect?
  An effect is something that lets you render something without using events and by using side effects
- When should you use an Effect and when should you not use an Effect?
  you should use an effect when you need to wait for certain data to load outside of react
- When do Effects run?
  after the first render and if any of the dependencies change
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  they are used to keep track if they are changed and of they are then the code inside of the useEffect gets ran. You declare them at the end of the useEffect and they are inside of square brackets
- Why would you want to clean up from an Effect?
  if the code continuously runs you need something to stop it from running it helps prevent memory leaks when the function unmounts
- How do you clean up from an Effect?
  you have a return statement followed by your cleanup
- When does the cleanup function run?
  when the component wants to unmount and before the execution of the next scheduled effect

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
