const express = require('express');
const router = express.Router()
const { EndpointSearch } = require('../src/service/search/endpoint');

//router.get("/getData", new Entrance().sentAllDataEntrance);

//search router
router.get("/search", new EndpointSearch().searchEndpoint)

router.get("/seachbyReligion/:religion", new EndpointSearch().searchbyReligionEndpoint)

router.get("/searchbyType/:type", new EndpointSearch().searchbyTypeEndpoint)

router.get("/filterSearch", new EndpointSearch().filterSearchEndpoint)

// router.get('/', (req, res) => {
//     return res.render('../view/pages/index.ejs')
// })

module.exports = router;