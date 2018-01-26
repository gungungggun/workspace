const assert = require('assert');

describe('hello', () => {
  before(() => {
    console.log('before')
  })
  after(() => {
    console.log('after')
  })
  beforeEach(() => {
    console.log('beforeEach')
  })
  afterEach(() => {
    console.log('afterEach')
  })
  it('test1', () => {
    assert.equal(1, 1);
  })
  it('test2', () => {
    assert.equal(1, 1);
  })
  it('test3', () => {
    assert.equal(1, 1);
  })
})

describe('world', () => {
  it('test1', () => {
    assert.equal(1, 1);
  })
  it('test2', () => {
    assert.equal(1, 1);
  })
  it('test3', () => {
    assert.equal(1, 1);
  })
})
