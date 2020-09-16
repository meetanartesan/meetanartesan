const express = require('express');
const router = express.Router();
const User = require('../models/User')


function userCheck(req, res, next) {
  if (req.session.user)
    return next();
  res.redirect('/signup');

}

module.exports = {
  userCheck
};