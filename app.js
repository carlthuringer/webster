let express = require('express')
let morgan = require('morgan')
let path = require('path')
let bodyParser = require('body-parser')
let http = require('http')
let reload = require('reload')

let publicDir = path.join(__dirname, 'public')

let app = express()

app.post('/', function (req, res) {
  console.log(req)
})

app.set('port', process.env.PORT || 3000)

app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  console.log('HI')
  res.sendFile(path.join(publicDir, 'index.html'))
})

let server = http.createServer(app)

reload(server, app)

server.listen(app.get('port'), function () {
  console.log(`Web server listening on port ${app.get('port')}`)
})
