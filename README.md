# eedit
Javascript library for making code editors.<br><br>

The easiest way to install the library is to include a script tag as seen below.
```html
<script src="//cdn.jsdelivr.net/gh/qaiik/eedit/dist/eedit.min.js"></script>
```

<br>
This will include the Prism.js and Prism.css dependencies automatically, but will not make any requests.<br><br>
# Basic use
```js
const container = document.querySelector("#editor");
const e = new eEditor(container, {
  language: "javascript",
  size: {
    w: "100%",
    h: "100%"
  },

  position: {
    x: "0%",
    y: "0%",
  },

  pad: 0,

  theme: ee.Themes.cool,
  lines: false
});

e.create();
```
<br><br>
The editor will automatically be created. (note - the editor does not conform to the size of the container. Containers are just used for easy removal of editors.)

