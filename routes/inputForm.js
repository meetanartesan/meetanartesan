// const router = require("./landing");
const express = require('express');
const router  = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User');

router.get('/inputForm', (req, res, next) => {
  res.render('inputForm');
});


router.post("/inputForm", (req, res, next) => {
  const { title, description, address } = req.body;

  Experience.create({
    title: title,
    description: description, 
    address: address,
  })

  .then((inputForm) => {
    console.log(`New experience was created: ${inputForm}`);
    res.redirect(`/inputForm/${inputForm._id}`);
    // res.redirect(`/dashboard`);

  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;
