const express = require('express');
const router = express.Router()
const { EndpointSearch } = require('../src/service/search/endpoint');
const { EndpointScore } = require('../src/service/score/endpoint');

//search router
router.get("/search", new EndpointSearch().searchEndpoint)

router.get("/seachbyReligion/:religion", new EndpointSearch().searchbyReligionEndpoint)

router.get("/searchbyType/:type", new EndpointSearch().searchbyTypeEndpoint)

router.get("/filterSearch", new EndpointSearch().filterSearchEndpoint)

//score router
router.get('/getScoreRestuarant', new EndpointScore().getScoreRestuarantEndpoint);

router.get("/AddScoreRestuarant/:res_id", new EndpointScore().addScoreResruarantEndpoint);

router.get('/getScoreFood', new EndpointScore().getScoreFoodEndpoint);

router.get("/AddScoreFood/:menu_id", new EndpointScore().addScoreFoodEndpoint);


module.exports = router;