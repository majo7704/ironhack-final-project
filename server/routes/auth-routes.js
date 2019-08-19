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
  User.find({ $or: [{ username: req.body.username }, { email: req.body.email }] })
    .then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user[0].password, function (err, match) {
          if (err) throw new Error("Encryption error");
          if (match) {
            req.session.user = user[0];
            
            res.status(200).send({message: 'Logged in'})
          }
        })
      } else {
        res.send('Invalid credentials')
      }
    })
    .catch((error) => {
      res.send(`${error}`,
        res.status(401).send({ error: "Unathorized" }), 
        res.status(500).send({message: "Internal Server Error"})
      )
  })
  
})

router.get('/logout', (req, res) => {
  debugger
  req.session.destroy(function (err) {
    if(err) return next(err)
  })
})
module.exports = router;