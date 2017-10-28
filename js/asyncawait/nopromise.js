a = () => {
  console.log(1)
}

b = () => {
  setTimeout(() => {
    console.log(2)
  }, 100)
}

c = () => {
  console.log(3)
}

d = () => {
  setTimeout(() => {
    console.log(4)
  }, 100)
}

e = () => {
  console.log(5)
}

a()
b()
c()
d()
e()
