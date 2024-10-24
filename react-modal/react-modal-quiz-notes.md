# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  the dialog element is used to display modal dialogs and non modal dialogs
- How do you show and hide a modal dialog?
  using use declaring a variable with useRef and passing it in as a prop in the dialog element then using the .showModal() or .close method on the ref
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  You have to talk to it from the parent component to the child component. It will not work because dialogs are outside of the document flow and detached from any of the parent elements
- How do you call the dialog element's functions in React?
  you put the child components in as a prop in the parent and then you can call the functions there
- How can you render nested components or JSX elements in React?
  you can create separate files and export them to your main component

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
