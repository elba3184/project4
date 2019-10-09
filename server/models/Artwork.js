const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artworkSchema = new Schema({
  url: String,
  likes: Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

const Artwork = mongoose.model('Artwork', artworkSchema)
module.exports = Artwork;