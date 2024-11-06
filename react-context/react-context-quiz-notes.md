# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  the purpose is to ba able to be able to pass data to different components without having to pass it up and down all the child components
- What values can be stored in context?
  any valid value
- How do you create context and make it available to the components?
  use the createContext() hook and assign it to a variable and then you create the context.provider component and wrap it arounf the components that need the context value
- How do you access the context values?
  value prop on the context component
- When would you use context? (in addition to the best answer: "rarely")
  when there are many child elements and you do not want to have the value travel up all the child components

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
