// const router = require("./landing");
const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User');

const {
  userCheck
} = require('./middleware')


const fileUploader = require('../configs/cloudinary.config');


router.get('/inputForm', userCheck, (req, res, next) => {
  res.render('inputForm');
});


router.post("/experience", fileUploader.single('image'), (req, res, next) => {
  const {
    title,
    description,
    street,
    number,
    zipCode,
    city,
    country
  } = req.body;

  let address = {
    street: street,
    number: number,
    zipCode: zipCode,
    city: city,
    country: country,
  }

  Experience.create({
      title: title,
      description: description,
      address: address,
      imageUrl: req.file.path
    }).then((newExperience) => {
      console.log(`New experience was created: ${newExperience}`);
      res.redirect(`/experience/${newExperience._id}`);
      // res.redirect(`/dashboard`);

    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;