const axios = require('axios');

const ipAPi = 'http://ip-api.com/json/';

const getLocation = async (req, res) => {
    try {
        let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        const response = await axios.get(`${ipAPi}${ip}`);
        
        res.json({
            status: response.status,
            data: response.data,
            ip: ip
        })

    } catch (error) {
        console.error(error);
    }
  
}

module.exports = getLocation;

