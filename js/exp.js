var exp = '<div><a href="test"></a></div><div><a href="https://abc.com/test"></a></div>'
exp = '<div></div>'

m = exp.match(/<a(.|\s)*?>/gi)

if (m !== null) {
  m.forEach(v => {
    a = v.match(/href="([^\"]+)"/)
    console.log(a[1])
  })
}
