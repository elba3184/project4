const express = require('express')
const axios = require('axios')
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const unsplash = require('unsplash-js');
const router = express.Router();

const User = require('../models/User')

router.get('/unsplash', (req, res, next) => {
  axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
    .then((response) => {
      res.json(response.data)
    })
})

router.get('/users/:username', (req, res, next) => {
  let username = req.params.username
  axios.get(`https://api.unsplash.com/users/${username}/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
    .then((response) => {
      res.json(response.data)
    }).catch(err => next(err))
})

router.get('/unsplash', (req, res, next) => {
  axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.UNSPLASH_ACCESSKEY}`)
    .then((response) => {
      res.json(response.data)
    })

})

router.get('/matched', (req, res, next) => {
  User.findById(req.body.id).then((user) => {
    return user.follow(req.body.user_id).then(() => {
      return res.json({ msg: "followed" })
    })
  }).catch(next)
})


router.get('/profile/:id', (req, res, next) => {
  let id = req.params.id
  User.findById(id).then(user => {
    res.json({ user })
  }).catch(err => console.error(err))
})

// router.get('/edit-user', (req, res, next) => {
//     .then((response) => {
//   res.json(response.data)
// }).catch(err => next(err))
// })

module.exports = router;