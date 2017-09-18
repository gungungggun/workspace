var assert = require("assert");

var hello = require("../src/hello.js");

describe("hello", () => {
  it("say", () => {
    assert.equal('hello', hello.say());
  })
})
