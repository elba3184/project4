const express = require('express')
const axios = require('axios')
const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, '.env')
})
const unsplash = require('unsplash-js');
const router = express.Router();

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

// router.get('/edit-user', (req, res, next) => {
//     .then((response) => {
//       res.json(response.data)
//     }).catch(err => next(err))
// })

module.exports = router;