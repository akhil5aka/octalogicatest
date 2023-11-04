// function implemented by Akhil

var express = require('express')


var router = express.Router();
var controller = require('../Controller/Insertion_apis')
const validation =  require('../Middlewares/validation_middleware')
const schemau= require('../Validations/booking_validation')


router.post('/insert_user_details',validation(schemau),controller.add_user_data)

module.exports= router;