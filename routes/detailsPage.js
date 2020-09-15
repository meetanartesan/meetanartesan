const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/details', (req, res, next) => {
  res.render('detailsPage');
});

module.exports = router;
