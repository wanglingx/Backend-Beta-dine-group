const express = require('express');
const router = express.Router()
const { EndpointSearch } = require('../src/service/search/endpoint');
const { EndpointScore } = require('../src/service/score/endpoint');
const { EndpointRank } = require('../src/service/rank/endpoint');
const { EndpointSelect } = require('../src/service/select/endpoint');
const { EndpointAdmin } = require('../src/service/admin/auth/endpoint'); /* auth */
const { EndpointDel } = require('../src/service/admin/delete/endpoint') /* delete */
const { EndpointIns } = require('../src/service/admin/insert/endpoint') /* insert */
const { EndpointUpd } = require('../src/service/admin/update/endpoint') /* update */


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
router.get("/getUser/:student_id", new EndpointScore().getUserEndpoint);
router.get('/addScoreFood/:menu_id', new EndpointScore().addScoreEndpoint)
router.get("/getScore/:user_id/:menu_id", new EndpointScore().getscoreEndpoint);
router.post('/addScoreUpdateRank', new EndpointScore().addScoreUpdateRankEndpoint);
router.post('/addUser', new EndpointScore().addUserEndpoint);

//rank router
router.get("/getScorebyMenu/:menu_id", new EndpointRank().getScorebyMenuEndpoint);
router.get("/addMenuScore/:menu_id", new EndpointRank().addMenuScoreEndpoint);
router.get("/getMenuInfo/:menu_id", new EndpointRank().getMenuInfoEndpoint);
router.get("/addRestaurantScore/:menu_id", new EndpointRank().addRestaurantScoreEndpoint);
router.get("/getAvgRestaurant/:restaurant_id", new EndpointRank().getAvgRestaurantEndpoint);

router.get("/Top4MenuInfo", new EndpointRank().getTop4MenuInfoEndpoint);
router.get("/Top4RestaurantInfo", new EndpointRank().getTop4RestaurantInfoEndpoint);

//select router
router.get("/RetuarantInfo/restuarantid=:restuarant_id", new EndpointSelect().getRestuarantInfoEndpoint)
router.get("/ResruatantAll" , new EndpointSelect().getAllRestaurantsInfoEndpoint)
router.get("/MenuInfo/menuid=:menu_id", new EndpointSelect().getMenuInfoEndpoint)
router.get("/ReligionInfo/religionid=:religion_id",new EndpointSelect().getReligionInfoEndpoint )
router.get("/BestFoodInfo" ,new EndpointSelect(). getBestFoodInfoEndpoint  )
router.get("/BestRestuarantInfo", new EndpointSelect().getBestRestuarantInfoEndpoint)

router.get("/foodType/foodType=:foodtype_id", new EndpointSelect().getFoodtypeInfoEndpoint)
//router.get("/")
// router.get("/home" , new EndpointSelect().gethomeEndpoint)


//admin part
/* auth */
/* insert */
/* delete */
/* update */

module.exports = router;