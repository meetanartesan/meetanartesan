const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('landing');
});




module.exports = router;