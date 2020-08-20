/************************************************************
 * File:    routes/users.js
 * Purpose: Define Server Routes for Handling Requests from /
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

/************************************************************
 * Define Requirements
 ************************************************************/
const express = require('express')
const db = require('../db')
const router = express.Router()


/************************************************************
 * Define Routes
 ************************************************************/
router.get('/', (req, res) => {
  const viewData = {
    title: 'Home'
  }
  res.render('home', viewData)
})

// stretch content - a gallery to display a grid of images as thumbnails
router.get('/gallery', (req, res) => {
  res.render('gallery', {})
})

//display form for adding new images
router.get('/new', (req, res) => {
  res.render('newImage', {})
})

//posting up a new image
router.post('/new', (req, res) => {
  res.redirect('image', {}) //should redirect to image page, pass through the id to display new image
})

//display page for imagesgit a
router.get('/:id', (req, res) => {
  res.render('image', {})
})

//posting up a new comment to images page
router.post('/:id', (req, res) => {
  res.redirect(req.get('referer')) //redirects to same page you were just on
})

/************************************************************
 * Export Routes
 ************************************************************/
module.exports = router