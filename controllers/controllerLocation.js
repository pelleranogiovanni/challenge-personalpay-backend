const service = require('../services/ipApiService');

const getLocation = async (req, res) => {
    try {
        let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
        
        const location = await service.getLocationWithIp(ip);
        
        res.json({
            status: location.status,
            data: location,
        })

    } catch (error) {
        console.error(error);
    }
  
}

module.exports = getLocation;

