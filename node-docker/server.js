const http = require('http')
const mongoose = require('mongoose')

const startServer = async () => {
  try {
    // MongoDB connection logic
    const { CONNECTIONSTRING } = process.env
    console.log('connecting to MongoDB with', CONNECTIONSTRING)
    await mongoose.connect(CONNECTIONSTRING)
    console.log('connected to MongoDB')

    // Node server definition
    const requestListener = (req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Hello world')
    }
    const app = http.createServer(requestListener)

    const PORT = 8000 // Bind node server to port
    app.listen(PORT, () => console.log('Server is running on port', PORT))
  } catch (error) {
    console.log('An error occurred:', error)
  }
}

startServer()