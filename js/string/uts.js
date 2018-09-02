const program = require('commander')

program
  .version('0.0.1')
  .parse(process.argv)

if (!program.args[0]) {
  console.log(new Date())
} else {
  console.log(new Date(parseInt(program.args[0])))
}
