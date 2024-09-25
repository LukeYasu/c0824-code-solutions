# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to see what is taking place that may not be visible on the webpage so that you an decode
- What is the purpose of events and event handling?
  events helps us know when something happened and we can write code for a specific event condition
- Are all possible parameters required to use a JavaScript method or function?
  no, some don't take any parameters and you are also able to have default parameters set up
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener
- What is a callback function?
  it is a function that is passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  the variable that is being called
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the event.target is showing us what part of the html code the event is using and listening for. You could check by console.log()
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  the first one is a callback function and the second one is calling the function

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
