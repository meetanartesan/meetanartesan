const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const Experience = require('../models/Experience');
const User = require('../models/User')



router.post('/login', (req, res, next) => {
  console.log('SESSION =====> ', req.session);
  console.log('The form data: ', req.body);

  const { username, password } = req.body;
  
  if (username === '' || password === '') {
    res.render('authentication/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }
 
  User.findOne({ username })
    .then(user => {
      if (!user) {
        res.render('authentication/login', { errorMessage: 'Username is not registered. Try with other username.' });
        console.log("renders login page");
        return;
      } else if (bcryptjs.compareSync(password, user.password)) {
        
        req.session.currentUser = user;
        res.redirect('/userProfile');
       //res.render('users/userProfile', { user });
       console.log("redirect to userProfile")
      } else {
        res.render('authentication/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
});

router.get('/login', (req, res) => res.render('authentication/login'));

// .get() route ==> to display the signup form to users
router.get('/signup', (req, res) => res.render('authentication/signup'));

router.get('/userProfile', (req, res) => {
  res.render('users/userProfile', { userInSession: req.session.currentUser });
});

// .post() route ==> to process form data
router.post('/signup', (req, res, next) => {
  console.log('The form data: ', req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    res.render('authentication/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
    return;
  }

  const saltRounds = 10;
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({

        username,
        password: hashedPassword
      });
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect("/login")
    })
    .catch(error => next(error));
});

module.exports = router;
