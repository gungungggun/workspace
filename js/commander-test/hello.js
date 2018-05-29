const program = require('commander')

program
  .version('0.0.1')
  .option('-t, --time [value]', '「朝」「昼」「夜」のどれかを選ぶ', '朝')
  .parse(process.argv)

if (!program.args[0]) {
  console.log('名前がわからない')
  return
}

if (program.time == '朝') {
  console.log('おはよう ' + program.args[0])
} else if (program.time == '昼') {
  console.log('こんにちは ' + program.args[0])
} else {
  console.log('こんばんは ' + program.args[0])
}
