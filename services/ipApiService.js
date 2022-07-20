const axios = require('axios');
const url = process.env.URL_BASE_IPAPI;

const getLocationWithIp = async (ip) => {
    
    const response = await axios.get(`${url}${ip}`);
    return response.data
}


module.exports = {getLocationWithIp};