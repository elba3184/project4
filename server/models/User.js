const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  profilePhoto: String,
  portfolio: String,
  likes: Array,
  userType: {
    type: String,
    enum: ['Photographer', 'Model', 'Stylist']
  },
  artwork: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork'
  }],
  location: String,
  biography: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User;