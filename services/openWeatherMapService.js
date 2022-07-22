const axios = require('axios');
const urlBase = process.env.URL_BASE_OPENWEATHERMAP;

const getCurrentWeatherWithCity = async (city) => {
    
    const response = await axios.get(`${urlBase}weather?q=${city}&units=metric&appid=${process.env.API_KEY_OPENWEATHERMAP}`);
    return response.data;
}

const getCurrentWeatherWithLocation = async (lat, lon) => {

    const response = await axios.get(`${urlBase}weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY_OPENWEATHERMAP}`);
    return response.data;
}


const getWeekWeatherWithCity = async (city) => {
    const response = await axios.get(`${urlBase}forecast?q=${city}&units=metric&appid=${process.env.API_KEY_OPENWEATHERMAP}`);
    return response.data;
}

const getWeekWeatherWithLocation = async (lat, lon) => {

    const response = await axios.get(`${urlBase}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY_OPENWEATHERMAP}`);  
    return response.data;
}

module.exports = {getCurrentWeatherWithCity, getCurrentWeatherWithLocation, getWeekWeatherWithCity, getWeekWeatherWithLocation};