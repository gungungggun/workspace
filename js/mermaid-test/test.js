const mermaid = require('mermaid')

let text = 'graph TD\nA-->B\nA-->C\nB-->D\nD-->A\n'
mermaid.render('graph', text, (svg) => {
  console.log(svg)
})
