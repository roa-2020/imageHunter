/*************************************************************
 * File:    index.js
 * Purpose: Entry point for accessing and starting application
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 *************************************************************/
const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.info('Listening on port', port)
})
