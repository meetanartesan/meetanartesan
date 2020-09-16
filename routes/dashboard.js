const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User')


/* GET home page */
router.get('/dashboard', (req, res, next) => {
  Experience.find()
    .then(experience => {
      res.render('dashboard', {
        experienceList: experience
      });
    })
  // res.redirect('/signup');
});

module.exports = router;