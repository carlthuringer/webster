let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')
let http = require('http')
let reload = require('reload')
let scrape = require('./lib/wikiscrape')

let app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('combined'))
app.use(bodyParser.json())

app.post('/', function (req, res) {
  console.log(req.body)
  let data = req.body.data
  scrape(data.search).then(function (links) {
    console.log(links)
    res.status(200).json({ data: links })
  })
})

let server = http.createServer(app)

reload(server, app)

server.listen(app.get('port'), function () {
  console.log(`Webster listening on port ${app.get('port')}`)
})
