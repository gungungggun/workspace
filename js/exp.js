var exp = '<div><a href="test"></a></div><div><a href="https://abc.com/test"></a></div>'

m = exp.match(/<a(.|\s)*?>/gi)

m.forEach(v => {
  a = v.match(/href="([^\"]+)"/)
  console.log(a[1])
})
