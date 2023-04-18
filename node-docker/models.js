const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  name: String,
  text: String,
  owner: String
})

module.exports = mongoose.model('Note', noteSchema)