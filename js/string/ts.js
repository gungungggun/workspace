const program = require('commander')

program
  .version('0.0.1')
  .parse(process.argv)

let now
if (!program.args[0]) {
  console.log(new Date().getTime())
} else {
  console.log(new Date(program.args[0]).getTime())
}
