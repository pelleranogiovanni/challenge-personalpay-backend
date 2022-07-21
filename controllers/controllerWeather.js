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


const getWeekWeather = async (req, res) => {
    city = req.query.city

    try {
        if (city) {
            const response = await serviceWeather.getWeekWeatherWithCity(city)
            const weeklyWeather = filterWeeklyWeather(response);

            res.json({
                weeklyWeather: weeklyWeather,
                city: response.city
            }) 

        } else {
            let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
            const location = await ipApiService.getLocationWithIp(ip);
            
            const response = await serviceWeather.getWeekWeatherWithLocation(location.lat, location.lon)
            
            const weeklyWeather = filterWeeklyWeather(response);

            res.json({
                weeklyWeather: weeklyWeather,
                city: response.city
            }) 
        }

    } catch (error) {
        res.json(error);
    }
}


const filterWeeklyWeather = (weather) => {
    arrayWeather = weather.list;
    let weeklyWeather = [];

    for (let i = 0; i < arrayWeather.length; i++) {   
        if (i>0) {
            arrayWeather[i].dt_txt.split(' ')[0] !== arrayWeather[i - 1].dt_txt.split(' ')[0] ? weeklyWeather.push(arrayWeather[i]) : null;
        } else{
            weeklyWeather.push(arrayWeather[i])
        }
    }

    return weeklyWeather;
}


module.exports = {getCurrentWeather, getWeekWeather};