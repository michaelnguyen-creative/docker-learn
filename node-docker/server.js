const http = require('http')

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello world')
}

const app = http.createServer(requestListener)

const PORT = 8000
app.listen(PORT)
console.log('Server is running on port', PORT)