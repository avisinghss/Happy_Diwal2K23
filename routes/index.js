const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homecontrollers');

console.log("Routes are Connected")

router.get('/',homeController.home);
router.get('/celeb',homeController.crackers);


module.exports = router;