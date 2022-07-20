const axios = require('axios');
const urlBase = process.env.URL_BASE_OPENWEATHERMAP;
const urlAPiWeather = process.env.URL_BASE_OPENWEATHERMAP + `weather?lat=-27.7&lon=-60.8778&appid=${process.env.API_KEY_OPENWEATHERMAP}&units=metric`

const getCurrentWeatherWithCity = async (city) => {
    
    const response = await axios.get(`${urlBase}weather?q=${city}&units=metric&appid=${process.env.API_KEY_OPENWEATHERMAP}`);
    return response.data;
}

const getCurrentWeatherWithLocation = async (lat, lon) => {

    const response = await axios.get(`${urlBase}weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY_OPENWEATHERMAP}`);
    return response.data;
}


module.exports = {getCurrentWeatherWithCity, getCurrentWeatherWithLocation};