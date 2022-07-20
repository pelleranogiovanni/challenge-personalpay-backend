const router = require('express').Router();
const axios = require('axios');
const getLocation = require('../controllers/controllerLocation');


const urlAPi = process.env.URL_BASE + `weather?lat=-27.7&lon=-60.8778&appid=${process.env.API_KEY}&units=metric`


router.get('/current/city', async (req, res) => {
    try {
      const response = await axios.get(urlAPi);
      console.log(response);
      res.json({
          status: response.status,
          data: response.data
      })
    } catch (error) {
      console.error(error);
    }
  });

router.get('/location', getLocation); 



// router.get('/location', async (req, res) => {
//     try {
//       const response = await axios.get(ipAPi);
      
//       res.json({
//         status: response.status,
//         data: response.data
//       })

//     } catch (error) {
//       console.error(error);
//     }
// });

module.exports = router;