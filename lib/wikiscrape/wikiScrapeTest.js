let chai = require('chai')
let expect = chai.expect

let WikiScrape = require('./index')

describe('WikiScrape', function () {
  it('works', function () {
    let resultPromise = WikiScrape('Testing')
    expect(resultPromise).to.be.a('promise')
  })
})