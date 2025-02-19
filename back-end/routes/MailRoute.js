const express = require('express');
const router = express.Router();
const {
    sendMail
} = require('../controller/SendMailController');
  
router.post('/',sendMail);  

module.exports = router;
