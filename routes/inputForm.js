// const router = require("./landing");
const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
const User = require('../models/User');

const fileUploader = require('../configs/cloudinary.config');


const {
  userCheck
} = require('./middleware')


router.get('/inputForm', userCheck, (req, res, next) => {
  res.render('inputForm');
});

// router.get('/inputForm', userCheck, (req, res, next) => {
//   res.render('inputForm');
//    });

router.post("/experience", fileUploader.single('image'), (req, res, next) => {
  console.log('experience');
  let imgName = req.file.originalname
  let imgPath = req.file.url
  let imgPublicId = req.file.public_id
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
      imgName,
      imgPath,
      imgPublicId

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