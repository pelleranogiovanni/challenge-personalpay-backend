const axios = require('axios');
const get_ip = require('ipware')().get_ip;

const ipAPi = 'http://ip-api.com/json/';

const getLocation = async (req, res) => {
    try {
        const response = await axios.get(`${ipAPi}${req.ip}`);
        let ip_info = get_ip(req);
        console.log(ip_info);
        
        res.json({
            status: response.status,
            data: response.data,
            ip: ip_info
        })

    } catch (error) {
        console.error(error);
    }
  
}

module.exports = getLocation;

