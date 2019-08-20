const express = require('./node_modules/express');
const router = express.Router();


const Plant = require('../../models/Plant.js')
router.get('/:plantId', (req, res, next) => {
    Plant.findOne({_id: req.params.plantId})
      .then((plants) => {
        console.log(plants)
        res.status(200).json(plants)
      })
      .catch(err => {
        console.log('error' + err)
      })
  }
)

module.exports = router;