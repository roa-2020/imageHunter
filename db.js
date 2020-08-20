/************************************************************
 * File:    db.js
 * Purpose: Define Database Interactions
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

const knexfile = require("./knexfile");

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
function getImageById(id, db = database) {
  return db("images")
    .where("images.id", id)
    .join("img_com", "images.id", "img_com.image_id")
    .join("comments", "img_com.comment_id", "comments.id")
    .select()
    .then((res) => {
      res.forEach((img) => {
        formatDate(img);
        delete img.id;
      });
      return res;
    });
}

function saveImage(image, db = database) {
  return db("images").insert(image);
}

/************************************************************
 * Export Functions
 ************************************************************/
module.exports = {
  getImageById,
  formatDate,
  saveImage,
};
