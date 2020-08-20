/************************************************************
 * File:    db.js
 * Purpose: Define Database Interactions
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

const knexfile = require('./knexfile')

/************************************************************
 * Define Requirements
 ************************************************************/
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

/************************************************************
 * Define Database Interaction FUnctions
 ************************************************************/
function doSomething(db = database){
  return true
}

/************************************************************
 * Export Functions
 ************************************************************/
module.exports = {
  doSomething,
  saveImage,
  saveComment
}


function saveImage(image, db = database){
  return db('images').insert( image )
}
