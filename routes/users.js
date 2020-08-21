/************************************************************
 * File:    routes/users.js
 * Purpose: Define Server Routes for Handling Requests from /
 * Authors: Anthony McGrath (anthony-kyle)
 *          Matt Saunders   (itsmattsaunders)
 *          Philip Chan     (phil-chan)
 *          Steven DeLacy  (steven-delacy)
 ************************************************************/

/************************************************************
 * Define Requirements
 ************************************************************/
const express = require("express");
const db = require("../db");
const router = express.Router();

/************************************************************
 * Define Routes
 ************************************************************/
router.get("/", (req, res) => {
  res.redirect("/image/1");
});

router.post("/newImage", (req, res) => {
  db.funcName(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status.send("Oh no, something whent wrong!!!", err);
    });
});

//posting up a new comment to images page
router.post('/newComment', (req, res) => {
  db.fName().then(() => {
    res.redirect(req.get('referer')) //redirects to same page you were just on
  }).catch((err) => {
    console.log(err)
    res.status(500).send("DATABASE ERROR: " + err.message)
  })
})

// // stretch content - a gallery to display a grid of images as thumbnails
// router.get('/gallery', (req, res) => {
//   res.render('gallery', {})
// })

//display page for images
router.get('/image/:id', (req, res) => {
  console.log(req.params)
  const id = req.params.id
  const getImage = db.getImageById(id)
  const getComments = db.getCommentsByImageId(id)
  Promise.all([getImage, getComments])
    .then(results => {
      console.log('Hello', results)
      const image = results[0]
      // console.log('----', image)
      const comments = results[1]
      //object to pass to display correct image 
      const viewData = {
        img_id: image.id,
        img_url: image.img_url,
        img_name: image.img_name,
        author_name: image.author_name,
        author_url: image.author_url,
        comments: comments //an array of comments (which are objects)
      }
      res.render('image', viewData)
    }).catch((err) => {
      console.log(err)
      res.status(500).send("DATABASE ERROR: " + err.message)
    })
})

/************************************************************
 * Export Routes
 ************************************************************/
module.exports = router;
