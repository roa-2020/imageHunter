const express = require('express')

// const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  const viewData = {
    title: 'Home'
  }
  res.render('home', viewData)
})

module.exports = router