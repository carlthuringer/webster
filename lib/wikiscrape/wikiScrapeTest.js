let yakbak = require('yakbak')
let http = require('http')
let path = require('path')
let chai = require('chai')
let expect = chai.expect

let proxy = http.createServer(yakbak('https://en.wikipedia.org', {
  dirname: path.join(__dirname, 'yakbak')
}))

before(function (done) {
  proxy.listen(9999, done)
})

after(function (done) {
  proxy.close(done)
})

let WikiScrape = require('./index')

describe('WikiScrape', function () {
  it('works', function (done) {
    let ws = new WikiScrape('localhost:9999')
    let resultPromise = ws.scrape('Testing')
    expect(resultPromise).to.be.a('promise')
    resultPromise.then(function (something) {
      console.log("Got")
      console.log(something)
      done()
    })
  })
})
