const express = require('express');
const router = express.Router();
const {
  getAllHeadOfficeStaff,
  getHeadOfficeStaff,
  addHeadOfficeStaff,
  updateHeadOfficeStaff,
  deleteHeadOfficeStaff,
} = require('../controller/HeadOfficeStaffController');

router.get('/', getAllHeadOfficeStaff);  
router.get('/:id', getHeadOfficeStaff);  
router.post('/', addHeadOfficeStaff);    
router.put('/:id', updateHeadOfficeStaff);
router.delete('/:id', deleteHeadOfficeStaff);

module.exports = router;
