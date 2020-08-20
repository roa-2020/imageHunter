/************************************************************
 * File:    server.js
 * Purpose: Define Server Requirements and interfaces
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

/************************************************************
 * Define Requirements
 ************************************************************/
// Server Details
const express     = require('express')
const hbs         = require('express-handlebars')
const server      = express()

// Route includes
const userRoutes  = require('./routes/users')

/************************************************************
 * Define Middleware
 ************************************************************/
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

/************************************************************
 * Define Custom Handlebars Helpers
 ************************************************************/
const h = hbs.create({});
h.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

 // Enable Handlebars to Access HTTP Headers
 server.use(function(req, res, next) {  
  server.locals.expreq = req;
  next();
})

/************************************************************
 * Define Routes
 ************************************************************/
server.use('/', userRoutes)

/************************************************************
 * Export Server
 ************************************************************/
module.exports = server