const express = require('express');
const router = express.Router();
const {
  getAllDeliverySchedules,
  getDeliverySchedule,
  addDeliverySchedule,
  updateDeliverySchedule,
  deleteDeliverySchedule,
} = require('../controller/DeliveryScheduleController');


router.get('/', getAllDeliverySchedules); 
router.get('/:id', getDeliverySchedule);  
router.post('/', addDeliverySchedule);    
router.put('/:id', updateDeliverySchedule);
router.delete('/:id', deleteDeliverySchedule);

module.exports = router;
