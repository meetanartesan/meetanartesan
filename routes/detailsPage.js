const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User')

/* GET home page */
router.get('/details', (req, res, next) => {
  res.render('detailsPage');
});

module.exports = router;