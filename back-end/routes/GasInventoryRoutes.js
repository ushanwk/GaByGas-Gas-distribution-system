const express = require('express');
const router = express.Router();
const {
  getAllGasInvetory,
  getGasInvetory,
  addGasInvetory,
  updateGasInvetory,
  deleteGasInventory,
} = require('../controller/GasInvetoryController');


router.get('/', getAllGasInvetory);  
router.get('/:id', getGasInvetory);  
router.post('/', addGasInvetory);    
router.put('/:id', updateGasInvetory);
router.delete('/:id', deleteGasInventory);

module.exports = router;
