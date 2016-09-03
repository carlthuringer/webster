const scraper = require('scraperjs')

function scrape (search) {
  console.log('Scrape', search)
  let url = `http://en.wikipedia.org/wiki/${search}`
  return new Promise(function (resolve, reject) {
    scraper.StaticScraper.create(url)
      .scrape(function ($) {
        let links
        if ($('#mw-normal-catlinks a[href="/wiki/Category:Disambiguation_pages"]').length > 0) {
          console.log('We found a Cat Page')
          links = $('#mw-content-text li a[href^="/wiki"]')
        } else {
          links = $('#mw-content-text p a[href^="/wiki"]')
        }
        let hrefs = links.map(function (_index, link) {
          return link.attribs.href
        })
        return Array.from(hrefs)
      })
      .then(resolve)
  })
}

module.exports = scrape
