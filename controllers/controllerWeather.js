const axios = require('axios');
const serviceWeather = require('../services/openWeatherMapService');
const ipApiService = require('../services/ipApiService');

const getCurrentWeather = async (req, res) => {
    city = req.query.city

    try {
        if (city) {
            const response = await serviceWeather.getCurrentWeatherWithCity(city)
        
            res.json({
                city: response.name,
                data: response,
            }) 

        } else {
            let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
            const location = await ipApiService.getLocationWithIp(ip);
            
            const response = await serviceWeather.getCurrentWeatherWithLocation(location.lat, location.lon)
            
            res.json({
                city: response.name,
                data: response,
            }) 
        }

    } catch (error) {
        res.json(error);
    }
}

module.exports = getCurrentWeather;