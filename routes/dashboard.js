const express = require('express');
const router  = express.Router();
const  Experience = require('../models/Experience');
const User = require('../models/User')

/* GET home page */
router.get('/dashboard', (req, res, next) => {
  console.log("here dashboard route")
  res.render('dashboard');
  // res.redirect('/signup');
});

module.exports = router;
