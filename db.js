/************************************************************
 * File:    db.js
 * Purpose: Define Database Interactions
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/
const knexfile = require('./knexfile')

/************************************************************
 * Define Requirements
 ************************************************************/
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

/************************************************************
 * Define Data Transformation Functions
 ************************************************************/
function formatDate(obj) {
  const date = new Date(obj.date).toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  obj.date = date;
  return obj;
}

/************************************************************
 * Define Database Interaction Functions
 ************************************************************/
function getImageCount(db = database){
  return db('images').count('id', {as : 'count'})
}

function getImageById(id, db = database){
  return db('images')
    .where('images.id', id)
    .first()
}

function getCommentsByImageId(id, db = database){
  return db('img_com')
    .where('img_com.image_id', id)
    .join('comments', 'img_com.comment_id', 'comments.id')
    .then(res => {
      res.forEach(comment => {
        formatDate(comment)
        delete comment.id
      })
      return res
    })
}

function saveImage(image, db = database) {
  return db("images").insert(image);
}

function saveComment(id, comment, db = database){
  return db ('comments').insert( comment )
  .then(ids => {
    const commentId = ids[0]
    const join = {
      image_id: id, 
      comment_id: commentId
    }
    return db('img_com').insert(join)
  })
}

/************************************************************
 * Export Functions
 ************************************************************/
module.exports = {
  getImageCount,
  getImageById,
  getCommentsByImageId,
  formatDate,
  saveImage,
};
