const express = require('express');
const router = express.Router();


//All user plants


const UserPlants = require('../../models/PlantOfUser.js')
router.get('/:user_id', (req, res, next) => {
  debugger
  UserPlants.find({user: req.params.user_id})
      .then((userplants) => {
        console.log(userplants)
        res.json(userplants)
      })
      .catch(err => {
        console.log('error' + err)
      })
  }
)

module.exports = router;