let obj = {
  'name': 'Jhon',
  'age': 22,
  'message': 'hello'
}

Object.keys(obj).forEach((e, i, a) => {
  console.log(e)
  console.log(obj[e])
})
