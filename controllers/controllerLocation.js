const axios = require('axios');

const ipAPi = 'http://ip-api.com/json/';

const getLocation = async (req, res) => {
    try {
        const response = await axios.get(`${ipAPi}${req.socket.remoteAddress}`);
        
        res.json({
            status: response.status,
            data: response.data,
            url: req.connection.remoteAddress
        })

    } catch (error) {
        console.error(error);
    }
  
}

module.exports = getLocation;

