const { OperationDel } = require('./operator');
class LogicDel {
    //restaurant
    deletrestaurantLogic =(restaurantid , res) =>{
        new OperationDel() .deletrestaurant(restaurantid , res)
    }



    
    //menu
    deletemenuLogic =(menuid , res) =>{
        new OperationDel() .deletemenu(menuid , res)
    }



}

module.exports = {
    LogicDel
}