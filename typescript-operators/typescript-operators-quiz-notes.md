# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  they are logical operators and they can be used to check for truthy or falsy values without the use of an if statement
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  it is when an expression gets evaluated to either be truthy or falsy and && and || will either return the trythy or falsy value or the expression depending on which one you use
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  it only checks for null or undefined unlike || who checks for falsy
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it evaluates a condition to see if it is true then either returns the first expression if it is true or the second expression if it is false
- What is the `?.` (optional chaining) operator? When would you use it?
  if the object?.prop is null or undefined, it returns undefined instead of throwing an error
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  it lets the contents of an array to be spread in the location it was used. You can take the contents of one array or object and spread the content into another array or object
- What data types can be spread into an array? Into an object?
  other arrays
- How does spread syntax differ from rest syntax?
  spread syntax takes data and puts it somewhere else and rest syntax takes a set of data and puts it in one place

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
