const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  first_name: String,
  last_name: String,
  email: String,
  imageUrl: {
    type: String,
    required: true
  },
  profilePath: String,
  portfolio: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  userType: {
    type: String,
    enum: ['Photographer', 'Model', 'Stylist']
  },
  artwork: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artwork'
  }],
  location: String,
  bio: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

// UserSchema.methods.follow = function (user_id) {
//   if (this.following.indexOf(user_id) === -1) {
//     this.following.push(user_id)
//   }
//   return this.save()
// }
// UserSchema.methods.addFollower = function (fs) {
//   this.followers.push(fs)
// }

const User = mongoose.model('User', userSchema)
module.exports = User;