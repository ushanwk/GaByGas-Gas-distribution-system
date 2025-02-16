const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require('../controller/UserController');

router.get('/', getAllUsers);  
router.get('/:id', getUser);    
router.post('/', addUser);     
router.put('/:id', updateUser); 
router.delete('/:id', deleteUser); 

module.exports = router;
