const router = require('express').Router();

const urlAPi = process.env.URL_BASE + `weather?lat=-27.7&lon=-60.8778&appid=${process.env.API_KEY}&units=metric`


router.get('/location', async(req, res) => {
    res.json({
        error: null,
        data: 'data de location'
    })
});

module.exports = router;