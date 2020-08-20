/************************************************************
 * File:    migrations/20200820164113_img_com.js
 * Purpose: Define Images/Comments Joining Table Structure 
 *          for Creation and Deletion of table
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

/************************************************************
 * Define Table and Structure
 ************************************************************/
exports.up = (knex) => {
  return knex.schema.createTable('img_com', (table) => {
    table.integer('image_id'),
    table.integer('comment_id')
});
}
/************************************************************
 * Define Delete Table
 ************************************************************/
exports.down = (knex) => {
  return knex.schema.dropTable('img_com')
};
