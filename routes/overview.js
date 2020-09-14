const express = require('express');
const router  = express.Router();
const  Experience = require('../models/Experience');
const User = require('../models/User')

/* GET home page */
router.get('/overview', (req, res, next) => {
  console.log("here overview route")
  res.render('overview');
  // res.redirect('/signup');
});

module.exports = router;
