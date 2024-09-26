# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    it executes a function for every item in the array
  - What should the callback function do?
    it should be using the value of the element or index for the function to execute some code but not modifying it
  - What is `Array.forEach` useful for?
    it is useful for executing a function for every element in an array

- `Array.map`:
  - What does `Array.map` do?
    it iterates through the array and executes a function then puts the results of the function into a new array
  - What should the callback function return?
    an array
  - What is `Array.map` useful for?
    it is useful for modifying the value of each element in an array and assigning it to a new array without modifying the original array
- `Array.find`:
  - What does `Array.find` do?
    It assigns elements to a new array and does not modify the old one. It can have a function with a conditional that can decide what elements get reassigned into a new array
  - What should the callback function return?
    a boolean
  - What is `Array.find` useful for?
    it is useful for finding specific elements that meet a certain condition without modifying the original array
- `Array.filter`:
  - What does `Array.filter` do?
    It excludes any elements that do not meet the conditional and reassigns elements that do meet the condition to a new array
  - What should the callback function return?
    boolean
  - What is `Array.filter` useful for?
    it is useful for excluding certain elements that do not meet a condition

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
