# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  C:POST
  R: GET
  U: PUT
  D: DELETE
  no it is only by convention
- What is Express middleware?
  it is a function that runs when a specific crud operation executes
- What is Express middleware useful for?
  it allows us to execute code when an action takes place
- How do you mount a middleware with an Express application?
  you do app.METHOD followed by the middleware you want to mount
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  the req and res objects

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
