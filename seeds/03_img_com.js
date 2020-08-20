/************************************************************
 * File:    seeds/03_img_com.js
 * Purpose: Define Raw Data for Image / Comments Join Table
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('img_com').del()
    .then(function () {
      // Inserts seed entries
      return knex('img_com').insert([
        {image_id: 1; comment_id: 1},
        {image_id: 1; comment_id: 2},
        {image_id: 2; comment_id: 4},
        {image_id: 3; comment_id: 3}
      ]);
    });
};
