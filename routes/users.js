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

/************************************************************
 * Export Routes
 ************************************************************/
module.exports = router