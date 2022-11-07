const express = require('express');
const router = express.Router()
const { Endpoint } = require('../src/service/search/endpoint');

//router.get("/getData", new Entrance().sentAllDataEntrance);

//search router
router.get("/search/restaurant", new Endpoint().searchRestaurantEndpoint)

// router.get('/', (req, res) => {
//     return res.render('../view/pages/index.ejs')
// })

module.exports = router;