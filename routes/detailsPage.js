const express = require('express');
const router  = express.Router();
const Experience = require('../models/Experience');


/* GET home page */
router.get('/experience/:experienceId', (req, res, next) => {
  let experienceId = req.params.experienceId;
  Experience.findById(experienceId).then(experience => {
    res.render('detailsPage', {experience: experience});
  })
});

module.exports = router;

// {
//   experience: experience,
//   user: req.session.user
// }