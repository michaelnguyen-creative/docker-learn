const http = require('http')
const mongoose = require('mongoose')
const app = require('./app')

const startServer = async () => {
  try {
    // MongoDB connection
    const { CONNECTIONSTRING } = process.env
    console.log('connecting to MongoDB with', CONNECTIONSTRING)
    await mongoose.connect(CONNECTIONSTRING)
    console.log('connected to MongoDB')

    // Node server definition
    const server = http.createServer(app)
    const PORT = 8000 // Bind node server to port
    server.listen(PORT, () => console.log('Server is running on port', PORT))

  } catch (error) {
    console.log('An error occurred:', error)
  }
}

startServer()