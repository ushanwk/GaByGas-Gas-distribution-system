const express = require('express');
const router = express.Router();
const {
  getAllGasRequestOrders,
  getGasRequestOrder,
  addGasRequestOrder,
  updateGasRequestOrder,
  deleteGasRequestOrder,
} = require('../controller/GasRequestOrderController');


router.get('/', getAllGasRequestOrders);  
router.get('/:id', getGasRequestOrder);  
router.post('/', addGasRequestOrder);     
router.put('/:id', updateGasRequestOrder); 
router.delete('/:id', deleteGasRequestOrder); 

module.exports = router;
