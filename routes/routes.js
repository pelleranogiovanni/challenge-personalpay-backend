const router = require('express').Router();
const axios = require('axios');
const getLocation = require('../controllers/controllerLocation');
const {getCurrentWeather, getWeekWeather} = require('../controllers/controllerWeather');


router.get('/location', getLocation); 

router.get('/current/:city?/', getCurrentWeather);

router.get('/forecast/:city?/', getWeekWeather);

module.exports = router;