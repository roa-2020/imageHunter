/************************************************************
 * File:    migrations/20200820164059_comments.js
 * Purpose: Define Comments Table Structure for Creation 
 *          and Deletion
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

/************************************************************
 * Define Table and Structure
 ************************************************************/
exports.up = (knex) => {
  knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.string('user_name')
    table.string('user_image')
    table.date('date')
    table.string('comment')
  })
};

/************************************************************
 * Define Delete Table
 ************************************************************/
exports.down = (knex) => {
  knex.schema.dropTable('comments')
};
