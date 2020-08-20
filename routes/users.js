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
  const viewData = {
    title: "Home",
  };
  res.render("home", viewData);
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

// // stretch content - a gallery to display a grid of images as thumbnails
// router.get('/gallery', (req, res) => {
//   res.render('gallery', {})
// })

//posting up a new image to images page
router.post('/newImage', (req, res) => {
  res.redirect(req.get('referer')) //redirects to same page you were just on
})

//posting up a new comment to images page
router.post('/newComment', (req, res) => {
  db.fName().then(()=>{
    res.redirect(req.get('referer')) //redirects to same page you were just on
  }).catch((err)=>{
    console.log(err)
    res.status(500).send("DATABASE ERROR: " + err.message)
  })
})

//display page for images
router.get('/:id', (req, res) => {
  res.render('image', {})
})

/************************************************************
 * Export Routes
 ************************************************************/
module.exports = router;
