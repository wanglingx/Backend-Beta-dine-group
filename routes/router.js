const express = require('express');
const multer = require('multer');
const path = require('path');
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
router.get("/getrestaurantforscore/score=:score" , new EndpointSelect().getrestaurantscoreEndpoint)

//admin
router.get("/restuarantforadmin/restaurantid=:restaurant_id" , new EndpointSelect().getrestuarantforadminEndpoint)
router.get("/menuforadmin/menuid=:menu_id" , new EndpointSelect().getmenuforadminEndpoint)
// router.get("/home" , new EndpointSelect().gethomeEndpoint)

//admin part

/* auth */
router.post('/login', new EndpointAdmin().loginEndpoint);
router.post('/getPasswordMaching', new EndpointAdmin().getPasswordMaching);

/* insert */
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './src/service/admin/insert/uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname.split('.')[file.originalname.split('.').length - 2] + '.' +
            file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
            callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024
    }
})

/* add new Restaurant Front-end Connect */
router.post("/addNewRestaurant", upload.single("file"), new EndpointIns().addNewRestaurantEndpoint,
    (error, req, res, next) => {
        if (error) {
           return res.status(400).send({ error: error.message }) 
        }
        else {
            new EndpointIns().addNewRestaurantEndpoint
        }
});

/* add new Menu Front-end Connect */
router.get("/addNewMenu/:restaurant_id", upload.single("file"), new EndpointIns().addNewMenuEndpoint,
    (error, req, res, next) => {
        if (error) {
            return res.status(400).send({ error: error.message })
        }
        else {
            new EndpointIns().addNewMenuEndpoint
        }
});

router.get("/findCurrentResId", new EndpointIns().findCurrentResIdEndpoint);
router.get("/findCurrentMenuId", new EndpointIns().findCurrentMenuIdEndpoint);
router.post("/findCanteen-id", new EndpointIns().findCanteenIdEndpoint);
router.post("/findReligion-id", new EndpointIns().findReligionIdEndpoint);
router.post("/findFoodtype-id", new EndpointIns().findFoodtypeIdEndpoint);

/* delete */
router.get("/deleteRestaurant/restaurantID=:restaurant_id", new EndpointDel().deleteRestaurantEndpoint)
router.get("/deletemenu/menuID=:menu_id", new EndpointDel().deleteMenuEndpoint)

/* update */
const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/service/admin/update/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.split('.')[file.originalname.split('.').length - 2] + '.' +
            file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
})

var upload1 = multer({ 
    storage: storage1 ,
    fileFilter: (req, file, callback) => {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
            callback(null, true)
    },
    limits: {
        fileSize: 1024 * 1024
    }
})

router.get("/checkcanteen/:canteen_name" , new EndpointUpd().checkcanteennameEndpoint)
router.get("/checkreligion/:religion_name" , new EndpointUpd().checkreligionnameEndpoint)
router.get("/checkrefoodtype/:foodtype_name" , new EndpointUpd().checkfoodtypenameEndpoint)

/** Update Restaurant Front-end connect */
router.post("/updaterestaurant", upload1.single("file"), new EndpointUpd().updaterestaurantEndpoint,
    (error, req, res, next) => {
        if (error) {
            return res.status(400).send({ error: error.message })
        }
        else {
            new EndpointUpd().updaterestaurantEndpoint
        }
    });

/** Update Menu Front-end connect */
router.post("/updatemenu", upload1.single("file"), new EndpointUpd().updatemenuEndpoint,
    (error, req, res, next) => {
        if (error) {
            return res.status(400).send({ error: error.message })
        }
        else {
            new EndpointUpd().updatemenuEndpoint
        }
    });

module.exports = router;
