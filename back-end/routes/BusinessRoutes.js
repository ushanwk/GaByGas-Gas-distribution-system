const express = require('express');
const router = express.Router();
const {
  getAllBusinesses,
  getBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
} = require('../controller/BusinessController');


router.get('/', getAllBusinesses);  
router.get('/:id', getBusiness);    
router.post('/', addBusiness);      
router.put('/:id', updateBusiness); 
router.delete('/:id', deleteBusiness); 

module.exports = router;
