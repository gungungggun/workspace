const chai = require('chai')
const expect = chai.expect

describe("chai", () => {
  it("chai1", () => {
    expect({a:1}).to.not.equal(1)
    expect({a:1}).to.have.property('a')
    expect({a:1}).to.not.have.property('b')
  })
})
