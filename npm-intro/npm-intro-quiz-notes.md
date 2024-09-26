# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  it is a software registry
- What is a package?
  it is a directory with files inside of it
- What are some other popular package managers?
  Yarn and PNPM
- How can you create a `package.json` with `npm`?
  npm init
- What is a dependency and how do you add one to a package?
  it is the packages that the project depends on
  npm install
- What happens when you add a dependency to a package with `npm`?
  in your package.json file,
  "devDependencies": {
  "dependency"
  }
  gets added
- What is a devDependency and how do you add one to a package?
  they are packages that you only need when developing your project
  npm install --save-dev
- How do you define and run `npm` scripts? Why are these useful?
  you define them with the "scripts" keyword and they are useful because you can call them to run a command line

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
