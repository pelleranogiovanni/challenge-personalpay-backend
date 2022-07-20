const router = require('express').Router();
const axios = require('axios');
const getLocation = require('../controllers/controllerLocation');
const getCurrentWeather = require('../controllers/controllerWeather');


router.get('/location', getLocation); 

router.get('/current/:city?/', getCurrentWeather);










router.get('/test', async (req, res, next) => {
  const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Villa%20Angela&appid=3e7757b282ce17e2ccfcc2328eec97c1');
  
  res.json(response.data)
});

module.exports = router;