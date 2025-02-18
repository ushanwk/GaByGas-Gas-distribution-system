const express = require('express');
const router = express.Router();
const {
  getAllOutlets,
  getOutlet,
  addOutlet,
  updateOutlet,
  deleteOutlet,
} = require('../controller/OutletController');

router.get('/', getAllOutlets); 
router.get('/:id', getOutlet);   
router.post('/', addOutlet);     
router.put('/:id', updateOutlet); 
router.delete('/:id', deleteOutlet); 

module.exports = router;
