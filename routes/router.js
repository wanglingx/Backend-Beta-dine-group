const express = require('express');
const router = express.Router()
const { EndpointSearch } = require('../src/service/search/endpoint');
const { EndpointScore } = require('../src/service/score/endpoint');
const { EndpointRank } = require('../src/service/rank/endpoint');
const { EndpointSelect } = require('../src/service/select/endpoint');

//search router
router.get("/search/:keyword", new EndpointSearch().searchEndpoint)
router.get("/seachbyReligion/:religion", new EndpointSearch().searchbyReligionEndpoint)
router.get("/searchbyType/:type", new EndpointSearch().searchbyTypeEndpoint)
router.get("/searchbyCanteen/:canteen", new EndpointSearch().searchbyCanteenEndpoint)
router.get("/searchbyMenu/:menu", new EndpointSearch().searchbyMenuEndpoint)
router.get("/filterSearch/:religion_name/:type_name", new EndpointSearch().filterSearchEndpoint)
router.get("/filterSearchByCanteen/:canteen_name/:menu_name", new EndpointSearch().filterSearchByCanteenEndpoint)
router.get("/filterSearchByType/:type_name/:religion_name", new EndpointSearch().filterSearchByTypeEndpoint)
router.get("/filterSearchByTypeCanteen/:type_name/:canteen_name", new EndpointSearch().filterSearchByTypeCanteenEndpoint)
router.get("/filterSearchByScore/:score", new EndpointSearch().filterSearchByScoreEndpoint)
router.get("/filterSearchByCanteenOnly/:canteen_id", new EndpointSearch().filterSearchByCanteenOnlyEndpoint)
router.get("/filterSearchByTypeOnly/:type_id", new EndpointSearch().filterSearchByTypeOnlyEndpoint)
router.get("/filterSearchByReligionOnly/:religion_id", new EndpointSearch().filterSearchByReligionOnlyEndpoint)


//score router
// router.get('/getScoreRestuarant', new EndpointScore().getScoreRestuarantEndpoint);
// router.get("/AddScoreRestuarant/:res_id", new EndpointScore().addScoreResruarantEndpoint);
router.get("/showFoodScore", new EndpointScore().showFoodScoreEndpoint);
router.get("/getScoreFood", new EndpointScore().getScoreFoodEndpoint);
router.get("/AddScoreFood/:menu_id", new EndpointScore().addScoreFoodEndpoint);

//editScore

//rank router

//select router
//router.get("/RetuarantInfo/:restuarant_id",new EndpointSelect().getRestuarantInfoEndpoint)
//router.get("/MenuInfo/:menu_id", new EndpointSelect().getMenuInfoEndpoint);

module.exports = router;