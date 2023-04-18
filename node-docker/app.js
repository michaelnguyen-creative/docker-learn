const express = require('express')
const Note = require('./models')

const app = express()
// Express json parser: incoming requests
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

app.post('/test', (req, res) => {
  res.status(200).json(req.body)
})

app.post('/notes', async (req, res) => {
  const note = new Note(req.body)
  const savedNote = await note.save()
  res.status(201).json(savedNote)
})

module.exports = app