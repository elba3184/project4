const express = require('express')
const axios = require('axios')
const path = require('path')
const User = require('../models/User')
// const io = require('./SocketManager')
const Unsplash = require('unsplash-js').default;
require('dotenv').config({
  path: path.join(__dirname, '.env')
})

// io.connection('connection')

const {
  isLoggedIn
} = require('../middlewares')
const router = express.Router()

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: 42,
    user: req.user,
  })
})

router.get('/random-photo', (req, res, next) => {
  console.log('random', req.user)
  axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
    .then((response) => {
      // console.log("RANDOM PHOTO INFO: ", response)
      res.json({
        pic: response.data
      })
    }).catch(err => next(err))
})


router.get('/allUsers', (req, res, next) => {
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===--=-=')
  //res.json({ wtf: '!!!' })
  User.find().then(allUsersFromDB => {
    res.json({ allUsersFromDB })
  }).catch(err => console.error(err))
})

module.exports = router;