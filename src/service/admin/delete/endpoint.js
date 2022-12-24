const { LogicDel } = require('./logic');
const model = require('./model');
class EndpointDel {
    //restaurant
    deleteRestaurantEndpoint = (req , res) =>{
        const restaurantid = req.params.restaurant_id;
        console.log(restaurantid)
        new LogicDel().deletrestaurantLogic(restaurantid , res)
    }




    //menu
    deleteMenuEndpoint = (req , res) =>{
        const menuid = req.params.menu_id;
        new LogicDel().deletemenuLogic(menuid , res)
    }



}
module.exports = {
    EndpointDel
}