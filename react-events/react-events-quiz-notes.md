# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  an event is some action that is done by the user that can be listened to to trigger changes in the dom
- What is an "event handler"? Which component declares the handler?
  an event handler is the code that gets executed as a result of the event can be stored inside of the same component or the parent component
- How do you pass an event handler to a React component?
  inside of the opening tag of the element you want to be listening for an event, you declare what kind of event you are looking for such as 'onClick' and then assign it a function inside of curly braces. The code could be a function call that is inside or inside the parent component
- What is the naming convention for event handlers?
  'handle' followed by the event you want to listen for but starting with a capital letter such as 'Click'
- What is an "event handler prop"? Which component declares the prop?
  an event handler prop is what decides what the component is listening for and the component that is getting event is the one with the prop declaration
- What are some custom event handler props a component may wish to define?
  onClick onModalClose onItemSelected onCustomAction
- What is the naming convention for custom event handler props?
  'on' followed by the event you want to listen for with the first letter capitalized such as 'Click'

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
