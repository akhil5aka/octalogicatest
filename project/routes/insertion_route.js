// function implemented by Akhil

var express = require('express')

var router = express.Router();
var controller = require('../Controller/Insertion_apis')

router.post('/insert_user_details',controller.add_user_data)

module.exports= router;