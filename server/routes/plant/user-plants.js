const express = require('express');
const router = express.Router();


//All user plants


const UserPlants = require('../../models/PlantOfUser.js')
router.get('/', (req, res, next) => {
  UserPlants.find({})
      .then((userplants) => {
        res.json(userplants)
      })
      .catch(err => {
        console.log('error' + err)
      })
  }
)

module.exports = router;