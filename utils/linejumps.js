function getLineElm(pre, l) {
  return pre.children[pre.innerText.split("\n").slice(0,l).length - 1]
}

function getLineIndex(pre, l) {
  return pre.innerText.split("\n").slice(0,l).length - 1
}


function getLineColIndex(pre, l, c) {
  return (pre.innerText.split("\n").slice(0,l).length - 1) + c
}

function goto(t, index) {
  t.selectionEnd = index
}

function goLine(t, pre, line) {
  const l = getLineColIndex(pre, line, getLineElm(pre, line).innerText.length)
  goto(t, l)
}
