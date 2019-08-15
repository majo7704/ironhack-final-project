const express = require('express')
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/signup', function (req, res, next) {
  bcrypt.hash(req.body.password, 10, function (error, hash) {
    if (error) throw new Error('Encryption error');

    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hash
    }

    User.create(newUser)
      .then((user) => {
        req.session.user = user;
        req.redirect('/login');
      })
      .catch((err) => {
      res.send('error')
    })
  })
})

router.post("/login", function (req, res) {
  
  User.find({ $or: [{ username: req.body.username }, { email: req.body.username }] })
    .then(() => {
      /// .....
      // start a session
      res.status(200).JSON({message: "loggend in "})
    })
  .catch((error) => {
      res.status() //  500 or 401, depending on what went wrong
    })
  
})

module.exports = router;