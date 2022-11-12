Adds line numbers to the right of the program.

Example:
```js
const e = new eEditor(document.body, {
  size: {
    w: "100%",
    h: "100%"
  },

  position: {
    x: "0%",
    y: "0%",
  },

  pad: 0,

  theme: ee.Themes.cool
})

e.create()

e.lines = true
```
