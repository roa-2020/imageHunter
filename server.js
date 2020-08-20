const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/users')

const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.use(function(req, res, next) {  
  server.locals.expreq = req;
  next();
})

// Custom Helpers
const h = hbs.create({});
h.handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

// Routes
server.use('/', userRoutes)

module.exports = server