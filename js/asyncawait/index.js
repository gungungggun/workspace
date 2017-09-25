asyncFunction = async () => {
  return 42
}

asyncFunction().then(result => {
  console.log(result);
})

exec = async () => {
  let result = await asyncFunction()
  console.log(result);
}
exec()
