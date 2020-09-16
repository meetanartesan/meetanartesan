const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User')
const {
  userCheck
} = require('./middleware')

/* GET home page */
router.get('/dashboard', userCheck, (req, res, next) => {
  Experience.find()
    .then(experience => {
      res.render('dashboard', {
        experienceList: experience
      });
    })
  // res.redirect('/signup');
});

module.exports = router;