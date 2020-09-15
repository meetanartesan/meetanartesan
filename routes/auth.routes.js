// routes/auth.routes.js
const mongoose = require('mongoose');

const { Router } = require('express');
const router = new Router();

// .get() route ==> to display the signup form to users
router.get('/signup', (req, res) => res.render('auth/signup'));

// .post() route ==> to process form data

module.exports = router;