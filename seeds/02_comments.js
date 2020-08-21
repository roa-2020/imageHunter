/************************************************************
 * File:    seeds/02_comments.js
 * Purpose: Define Raw Data for Comments Table
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, user_name: 'shaquille.oatmeal', user_image: 'https://m.media-amazon.com/images/M/MV5BMmRhYTgzMjQtNDcxMC00MTA4LWFlYTUtOTJkYTE4ODlmMWZkXkEyXkFqcGdeQXVyODQ3NDAyNDU@._V1_UY268_CR147,0,182,268_AL_.jpg', date: new Date('04/20/2020'), comment: 'I flip better than I dunk'},
        {id: 2, user_name: 'bongwater-baptist', user_image: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2014/03/cheech-and-chong.jpg', date: new Date('07/12/1969'), comment: 'nice'},
        {id: 3, user_name: 'Philllllllllllllllll', user_image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Hulk_%28circa_2019%29.png/250px-Hulk_%28circa_2019%29.png', date: new Date('08/20/2020'), comment: 'gotta get swol, too stronk 4 u'},
        {id: 4, user_name: 'Vin Diesel', user_image:'https://img1.looper.com/img/gallery/vin-diesel-makes-a-head-turning-claim-about-fast-and-furious-10/intro-1581088044.jpg', date: new Date('02/15/2019'), comment:'This aint no 10 second race!'}
      ]);
    });
};
