var express = require('express');
const userController = require('../controller/userController'); 
var router = express.Router();

/* GET users listing. */
router.post('/signup',userController.signup);
router.post('/signin',userController.signin);

module.exports = router;
