const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant')
const User = require('../models/User')
const PlantOfUser = require('../models/PlantOfUser')



//My profile with 2 components
router.get('/myJungle', (req, res, next) => {
  if (!req.session.user) {//check if the user logged in, protcted by session
    User.findById(req.session.user._id)
    .populate('listOfCreatedPlants')//populate field
    .populate('wishListPlants')
    .then(user => {
      //res.render('myJungle', {
      res.json(user) //sending information to the front end(res.send works as well)
      //make sure the front end gets correct info
    //}
    })
    .catch(err => {
      console.log(err)
      res.send(err) 
    })
  } else {
    res.send("Please log in")
  //if not logged in send validation message, check in the front end and it has to red to login
  let newPlant = {
    cool_name: req.body.cool_name,
    location: req.body.location,
    with_you_since: req.body.with_you_since,
    size: req.body.size,
    pot_diameter: req.body.pot_diameter,
    last_report: req.body.last_report,
    notes: req.body.notes,
    image: req.body.image
  }
  PlantOfUser.create(newPlant)
    .then((response) => {
    return User.findByIdAndUpdate(req.session.user._id, {$push:{plants:response._id}}, {new: true} )
      .populate('listOfCreatedPlants')//populate field
      .populate('wishListPlants')
    })
    .then((user => {
      res.send("myJungle", {user})
    }))
      .catch(err => console.log(err))
  }
})

router.get('/newPlant', (res, req, nex) => {
  res.json("new_plant")
})

router.post("/newPlant", (req, res, next) => {
  //click on button "Add to my collection"(first step)
  let newPlant = {
    cool_name: req.body.cool_name,
    location: req.body.location,
    with_you_since: req.body.with_you_since,
    size: req.body.size,
    pot_diameter: req.body.pot_diameter,
    last_report: req.body.last_report,
    notes: req.body.notes,
    image: req.file.filename
  }
  PlantOfUser.create(newPlant)
    .then((response) => {
      return User.findByIdAndUpdate(req.session.user._id, {
      $push: { listOfCreatedPlants: response._id}
    },{new: true})
    })
    .then((userResponse) => {
    res.json(user)
    })
    .catch((err) => {
    next(err)
  })
})
//wisjList notfinished
router.get('/wish', (req, res, next) => {
    res.json('myJungle')
})
router.post('/wish', (req, res, next) => {
  let newWish = {
    state: 'aWish',
    
  }
})
//route to edit my plant

module.exports = router;