/************************************************************
 * File:    seeds/01_images.js
 * Purpose: Define Raw Data for Images Table
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {id: 1, img_url: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80', img_name: 'Breakfast in bed.', author_name: 'Chad Montano', author_url: 'https://unsplash.com/@briewilly'},
        {id: 2, img_url: 'https://images.unsplash.com/photo-1584345274849-e9596d6ea12d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', img_name: 'Red Cheverolet Camaro', author_name: 'Meritt Thomas', author_url: 'https://unsplash.com/@merittthomas'},
        {id: 3, img_url: 'https://images.unsplash.com/photo-1564509101718-db7a4e1089bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80', img_name: 'Cute piggy cupcakes', author_name: '__ drz __', author_url: 'https://unsplash.com/@__drz__'}
      ]);
    });
};
