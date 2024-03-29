const { LogicSelect } = require('./logic');
const model = require('./model');
class EndpointSelect {
    constructor(){
        this.Selectbestmenu = model.Selectbestmenu;
        this.SelectbestRestaurant = model.SelectbestRestaurant;
        this.selectReilgion = model.Selectreilgion;
    }
    getRestuarantInfoEndpoint = (req, res) => {
        let restaurantID = req.params.restuarant_id
        console.log("1" + "     " + restaurantID)
        new LogicSelect().getRestuarantLogic(restaurantID , res)
        
    }
    getMenuInfoEndpoint = (req, res) => {
        let menuID = req.params.menu_id
        new LogicSelect().getMenuLogic(menuID , res)
    }
    getReligionInfoEndpoint = (req, res) => {
        let religionID =req.params.religion_id
        new LogicSelect().getReligionLogic(religionID , res)
    }
    getBestFoodInfoEndpoint = ( req,res) => {
        new LogicSelect(). getBestFoodLogic(res)
    } 
    getBestRestuarantInfoEndpoint  = (req,res) => {
        new LogicSelect().getBestRestuarantLogic(res)
    }
    getFoodtypeInfoEndpoint = (req,res) => {
        let foodtype_id = req.params.foodtype_id
        new LogicSelect(). getFoodtypeLogic(foodtype_id , res)
    }
    getrestaurantscoreEndpoint =(req,res) => {
        const score = req.params.score
        new LogicSelect(). getrestaurantscoreLogic(score,res)
    }

    getAllRestaurantsInfoEndpoint = (req,res) => {
        new LogicSelect(). getAllRestaurantsLogic(res)
    }
    getrestuarantforadminEndpoint = (req,res) => {
        let restaurantid = req.params.restaurant_id
        console.log(restaurantid)
        new LogicSelect().getrestaurantforadminLogin(restaurantid , res)
    }
    getmenuforadminEndpoint = (req,res) => {
        let menuID = req.params.menu_id
        new LogicSelect().getmenuforadminLogin(menuID , res)
    }
    // gethomeEndpoint =(req, res) => {
    //     new LogicSelect(). gethomeLogic(res)
    // }
}
module.exports = {
    EndpointSelect
}