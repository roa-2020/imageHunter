/************************************************************
 * File:    migrations/20200820164048_images.js
 * Purpose: Define Images Table Structure for Creation 
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
  return knex.schema.createTable('images', (table) => {
    table.increments('id')
    table.string('img_url')
    table.string('img_name')
    table.string('author_name')
    table.string('author_url')
});
}
/************************************************************
 * Define Delete Table
 ************************************************************/
exports.down = (knex) => {
  return knex.schema.dropTable('images')
};
