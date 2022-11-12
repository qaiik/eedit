class eEditor {
  constructor(parent, data) {
    this.language = "javascript"
    this.theme = data.theme
    this.parent = parent
    this.data = data;
    this.t = document.createElement("textarea")
    this.p = document.createElement("pre")
    this.t.ariaHidden = "true"
    this.onins = []
    const onins = this.onins;
    const p = this.p
    const lang = this.language
    const ss = this.syncscroll
    this.t.addEventListener("input", function() {
      ss(p, this)
      const v = this.value
      onins.forEach(o => {
        o(v)
      })

      p.innerHTML = Prism.highlight(v, Prism.languages[lang])
    })

    this.t.addEventListener("scroll", function() {
      ss(p, this)
    })

    this.basecss(this.data);
    


  }

  syncscroll(p, element) {
    let result_element = p
  // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
  }

  basecss(data) {
    this.p.style.width = data.size.w
    this.p.style.height = data.size.h
    this.t.style.width = data.size.w
    this.t.style.height = data.size.h
    this.t.spellcheck = "false"

    const theme = data.theme
    const syn = theme.syntax;
    const s = document.createElement("style")
    for (const e of Object.entries(syn)) {
      s.innerHTML += `.token.${e[0]}{color:${e[1]} !important;}\n`
    }
    document.head.appendChild(s)

    

    this.overlay(this.t)
    this.overlay(this.p)

  }

  overlay(e) {
    e.style.top = this.data.position.y
    e.style.left = this.data.position.x
    e.style.overflow = "auto"
    e.style.position = "absolute"
    e.style.fontFamily = this.theme.font.family
    e.style.fontSize = this.theme.font.size
    e.style.margin = 0
    e.style.padding = this.data.pad
    e.style.lineHeight = this.theme.lines?.height ? this.theme.lines?.height : "1.5em"
    e.style.whiteSpace = "pre-wrap"
    this.textarea(this.t)
    this.pre(this.p)
  }

  _theme(th, e) {
    e.style.fontFamily = th.font.family
    e.style.fontSize = th.font.size
    e.style.margin = 0
    e.style.lineHeight = th.lines?.height ? this.theme.lines?.height : "1.5em"
  }

  Theme(t) {
    this._theme(t, this.t)
    this._theme(t, this.p)
    this.t.style.caretColor = t.caret.color
    this.p.style.color = t.colors.text
    this.p.style.backgroundColor = t.colors.background
  }

  create() {
    this.parent.appendChild(this.t)
    this.parent.appendChild(this.p)
  }

  textarea(t) {
    t.style.border = "none"
    t.style.resize = "none"
    t.style.background = "transparent"
    t.style.zIndex = "1"
    t.style.color = "rgba(0, 0, 0, 0);"
    t.style.caretColor = this.theme.caret.color
    t.style.outline = "none"
    t.style.color = "transparent"
  }
  pre(p) {
    p.style.zIndex = "0"
    p.style.color = this.theme.colors.text
    p.style.backgroundColor = this.theme.colors.background
  }

}

const ee = {
  Themes: {
    cool: {
      font: {
        family: "monospace",
        size: "18px"
      },

      caret: {
        color: "darkgrey"
      },

      colors: {
        text: "white",
        background: "#2B065A"
      },

      syntax: {}
    },

    matrix: {
      font: {
        family: "monospace",
        size: "18px"
      },

      caret: {
        color: "green"
      },

      colors: {
        text: "yellow",
        background: "black"
      },

      syntax: {}
    }
  }
}
