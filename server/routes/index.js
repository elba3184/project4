const express = require('express')
const axios = require('axios')
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const Unsplash = require('unsplash-js').default;

// const unsplash = new Unsplash({
//   applicationId: process.env.UNSPLASH_ACCESSKEY,
//   secret: process.env.UNSPLASH_SECRETKEY
// });

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
  axios.get(`https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
    .then((response) => {
      console.log("RANDOM PHOTO INFO: ", response)
      res.json({
        pic: response.data
      })
    }).catch(err => next(err))
})

module.exports = router;



// router.get('/unsplash', (req, res, next) => {
//   console.log("Route exists")
//   console.log(process.env.UNSPLASH_ACCESSKEY)
//   axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
//     .then((response) => {
//       res.json(response.data)
//     })
// })

// router.get('/users/:username', (req, res, next) => {
//   let username = req.params.username

//   axios.get(`https://api.unsplash.com/users/${username}/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
//     .then((response) => {
//       console.log("=====>>>>>", response)
//       res.json(response.data)
//     }).catch(err => next(err))
// })