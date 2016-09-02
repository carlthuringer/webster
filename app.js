let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')
let http = require('http')
let reload = require('reload')

let app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('combined'))
app.use(bodyParser.json())

app.post('/', function (req, res) {
  console.log(req.body)
  res.status(200).end()
})

let server = http.createServer(app)

reload(server, app)

server.listen(app.get('port'), function () {
  console.log(`Webster listening on port ${app.get('port')}`)
})
