# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  in this instance it is what ever you are clicking as the event listener is listening for a click
- What is the effect of setting an element to `display: none`?
  it hides the element and it also takes it out of the document flow
- What does the `element.matches()` method take as an argument and what does it return?
  it takes a string in as an argument and it returns a boolean
- How can you retrieve the value of an element's attribute?
  getAttribute
- At what steps of the solution would it be helpful to log things to the console?
  it is good to console.log() the $eventTarget and the $eventTarget.dataset.view so see if they both log the same thing
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  the ts code will still be able to be ran as long as the new tab follows all of the class naming conventions
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  It would be written to open a new page when you click a new tab instead of hiding and showing

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
