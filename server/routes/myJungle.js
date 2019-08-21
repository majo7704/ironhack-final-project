const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant')
const User = require('../models/User')
const PlantOfUser = require('../models/PlantOfUser')

//My profile with 2 components
router.get('/myJungle', (req, res, next) => {
  User.findById(req.session.user._id)
  .populate('listOfCreatedPlants')//populate field
  .populate('wishListPlants')
  .then(user => {
    res.json(user) //sending information to the front end(res.send works as well)
    //make sure the front end gets correct info
  })
  .catch(err => {
    console.log(err)
    res.send(err) 
  })
})
const uploader = require('../configs/cloudinary-setup')
router.post("/newPlant/:id", uploader.single("image_url"), (req, res, next) => {
  //click on button "Add to my collection"(first step)
  debugger
  let plantIds = req.session.user.listOfCreatedPlants.map((plantObjectId) => plantObjectId.toString())
  if (!plantIds.includes(req.params.id)) {
    debugger
    next(createError(403, "This is not your plant, buddy."))
  } else {
    let newPlant = {
      cool_name: req.body.cool_name,
      location: req.body.location,
      with_you_since: req.body.with_you_since,
      size: req.body.size,
      pot_diameter: req.body.pot_diameter,
      last_report: req.body.last_report,
      notes: req.body.notes,
    }

    if (req.file) {
      newPlant.image_url = req.file.secure_url
    }

    PlantOfUser.findByIdAndUpdate(req.params.id, newPlant)
      .then((plant) => {
        return User.findByIdAndUpdate(req.session.user._id, {
          $push: { listOfCreatedPlants: plant._id }
        }, {
            new: true
          })
      })
      .then((user) => {
        res.json(user)
      })
      .catch((err) => {
        next(err)
      })
  }
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