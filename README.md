# eedit
Javascript library for making code editors.<br><br>

The easiest way to install the library is to include a script tag as seen below.
```html
<script src="//cdn.jsdelivr.net/gh/qaiik/eedit/dist/eedit.min.js"></script>
```

<br>
This will include the Prism.js and Prism.css dependencies automatically, but will not make any requests.<br><br>
<h2>Basic use</h2>

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
The editor will then be created.<br>
The editor will not conform to the size of the container. The container is only used for easy removal of editors.<br>

<h2>Line numbers</h2>
Line numbers can be set in initialization:

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
  lines: true
});

e.create();
```

<br><br>

Or toggled:
```js
e.toggleLines()
```

<br>
Line numbers will appear on the right. They can be changed with css.
<br><br>
<h2>Themes & custom syntax highlighting</h2>
There are two themes built in to eedit - cool and matrix.<br>
Themes can be modified automatically:

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
  lines: true
});

e.Theme(ee.Themes.matrix)

e.create();
```

<br><br>
You don't need to use prebuilt themes. You can create your own themes.<br>
Source for matrix theme:

```js
{
  "font": {
    "family": "monospace",
    "size": "18px"
  },
  "caret": {
    "color": "green"
  },
  "colors": {
    "text": "yellow",
    "background": "black"
  },
  "syntax": {}
}
```

<br>
You can modify the base syntax highlighting like so:

```js
{
  "font": {
    "family": "monospace",
    "size": "18px"
  },
  "caret": {
    "color": "green"
  },
  "colors": {
    "text": "yellow",
    "background": "black"
  },
  "syntax": {
      "keyword": "blue",
      "punctuation": "#FF0000"
  }
}
```
<br>
You can find out what keys you need by looking through the Prism css files or writing some code and seeing what classes are created under the pre.<br><br>
<h2>Handling the code & underlying elements</h2><br>
The editor is comprised of a textarea (instance.t), and a pre (instance.p)<br>
To retrieve the code:

```js
console.log(editor.p.innerText)
```

<br><br>
You can also modify the code:

```js
editor.p.innerText = editor.p.innerText.split("\n").slice(0,5).join("\n")
```

<br><br>
And lastly, you can change the language for syntax highlighting.

```js
editor.setLanguage("python") //https://prismjs.com/download.html#themes=prism
```
<br><br>
Languages supported (thanks to prism):
- plaintext
- abap
- abnf
- actionscript
- ada
- agda
- al
- antlr4
- apacheconf
- apex
- apl
- applescript
- aql
- arduino
- arff
- armasm
- arturo
- asciidoc
- asm6502
- asmatmel
- aspnet
- autohotkey
- autoit
- avisynth
- avro-idl
- awk
- bash
- basic
- batch
- bbcode
- bbj
- bicep
- birb
- bison
- bnf
- bqn
- brainfuck
- brightscript
- bro
- bsl
- c
- cfscript
- chaiscript
- cil
- cilkc
- cilkcpp
- clike
- clojure
- cmake
- cobol
- coffeescript
- concurnas
- cooklang
- coq
- cpp
- crystal
- csharp
- cshtml
- csp
- css
- css-extras
- csv
- cue
- cypher
- d
- dart
- dataweave
- dax
- dhall
- diff
- django
- dns-zone-file
- docker
- dot
- ebnf
- editorconfig
- eiffel
- ejs
- elixir
- elm
- erb
- erlang
- etlua
- excel-formula
- factor
- false
- firestore-security-rules
- flow
- fortran
- fsharp
- ftl
- gap
- gcode
- gdscript
- gedcom
- gettext
- gherkin
- git
- glsl
- gml
- gn
- go
- go-module
- gradle
- graphql
- groovy
- haml
- handlebars
- haskell
- haxe
- hcl
- hlsl
- hoon
- hpkp
- hsts
- http
- ichigojam
- icon
- icu-message-format
- idris
- iecst
- ignore
- inform7
- ini
- io
- j
- java
- javadoc
- javadoclike
- javascript
- javastacktrace
- jexl
- jolie
- jq
- js-extras
- js-templates
- jsdoc
- json
- json5
- jsonp
- jsstacktrace
- jsx
- julia
- keepalived
- keyman
- kotlin
- kumir
- kusto
- latex
- latte
- less
- lilypond
- linker-script
- liquid
- lisp
- livescript
- llvm
- log
- lolcode
- lua
- magma
- makefile
- markdown
- markup
- markup-templating
- mata
- matlab
- maxscript
- mel
- mermaid
- metafont
- mizar
- mongodb
- monkey
- moonscript
- n1ql
- n4js
- nand2tetris-hdl
- naniscript
- nasm
- neon
- nevod
- nginx
- nim
- nix
- nsis
- objectivec
- ocaml
- odin
- opencl
- openqasm
- oz
- parigp
- parser
- pascal
- pascaligo
- pcaxis
- peoplecode
- perl
- php
- php-extras
- phpdoc
- plant-uml
- plsql
- powerquery
- powershell
- processing
- prolog
- promql
- properties
- protobuf
- psl
- pug
- puppet
- pure
- purebasic
- purescript
- python
- q
- qml
- qore
- qsharp
- r
- racket
- reason
- regex
- rego
- renpy
- rescript
- rest
- rip
- roboconf
- robotframework
- ruby
- rust
- sas
- sass
- scala
- scheme
- scss
- shell-session
- smali
- smalltalk
- smarty
- sml
- solidity
- solution-file
- soy
- sparql
- splunk-spl
- sqf
- sql
- squirrel
- stan
- stata
- stylus
- supercollider
- swift
- systemd
- t4-cs
- t4-templating
- t4-vb
- tap
- tcl
- textile
- toml
- tremor
- tsx
- tt2
- turtle
- twig
- typescript
- typoscript
- unrealscript
- uorazor
- uri
- v
- vala
- vbnet
- velocity
- verilog
- vhdl
- vim
- visual-basic
- warpscript
- wasm
- web-idl
- wgsl
- wiki
- wolfram
- wren
- xeora
- xml-doc
- xojo
- xquery
- yaml
- yang
- zig
