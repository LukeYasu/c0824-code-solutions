# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  We do this so that we are able to see the state of something and is a great way to debug code
- What is a "model"?
  a model is what things are based off of and the DOM is based off of a tree because it branches out
- Which "document" is being referred to in the phrase Document Object Model?
  the webpage
- What is the word "object" referring to in the phrase Document Object Model?
  all the nodes in the document
- What is a DOM Tree?
  it is the structure of how the document is structured with all the nodes within it
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector) getElementById(id)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector) getElementsByTagName(tagName)
- Why might you want to assign the return value of a DOM query to a variable?
  to be able to see the value of the query which helps with debugging
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  the entire page has to be loaded before we can start manipulating it with js
- What does `document.querySelector()` take as its argument and what does it return?
  it takes elements and returns the first element that matches
- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes elements and returns a node list of all elements in hte document that match the selector

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
