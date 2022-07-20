const router = require('express').Router();
const axios = require('axios');
const getLocation = require('../controllers/controllerLocation');
const getCurrentWeather = require('../controllers/controllerWeather');


// router.get('/location', getLocation); 

router.get('/current/:city?/', getCurrentWeather);










router.get('/test', getLocation);

module.exports = router;