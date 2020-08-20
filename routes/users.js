const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  const viewData = {
    title: 'Home'
  }
  res.render('home', viewData)
})

//display page for images
router.get('/image/:id', (req, res) => {

})

//posting up a new comment to images page
router.post('/image/:id', (req, res) => {
  
})

//display form for adding new images
router.get('/image/new', (req, res) => {
  
})

//posting up a new image
router.post('/image/new', (req, res) => {
  
})

// stretch content - a gallery to display a grid of images as thumbnails
router.get('/gallery', (req, res) => {

})

module.exports = router