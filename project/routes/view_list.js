// Implemented by Akhil 

var express = require('express')
 var router = express.Router();

 var controller = require('../Controller/Main_view_apis')

 router.get('/wheel_list',controller.view_wheels_category)
 router.post('/vehicle_list',controller.vehicle_types)
 router.post('/models',controller.vehicle_model)

 module.exports = router;