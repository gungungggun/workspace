const chai = require('chai')
const expect = chai.expect

describe('webdriverio', () => {

  let client = {}

  it('その1', (done) => {
    browser.url('http://www.google.com')
    const title = browser.getTitle()
    expect(title).to.be.equal('Google')
    done()
  })
})
