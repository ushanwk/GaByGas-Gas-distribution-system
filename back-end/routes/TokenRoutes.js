const express = require('express');
const router = express.Router();
const {
  getAllTokens,
  getToken,
  addToken,
  updateToken,
  deleteToken,
} = require('../controller/TokenController');


router.get('/', getAllTokens);  
router.get('/:id', getToken);   
router.post('/', addToken);     
router.put('/:id', updateToken); 
router.delete('/:id', deleteToken); 

module.exports = router;
