const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)



function doSomething(db = database){
  return true
}

module.exports = {
  doSomething,
}