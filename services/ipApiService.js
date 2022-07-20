const axios = require('axios');
const url = process.env.URL_BASE_IPAPI;

const getLocationWithIp = async (ip) => {
    
    return await axios.get(`${url}${ip}`);
}


module.exports = {getLocationWithIp};