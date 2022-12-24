const { LogicIns } = require('./logic');
const model = require('./model');
class EndpointIns {
    constructor() {
        this.resInfo = model.restaurantInfo
    }

    findCurrentResIdEndpoint = (req, res) => {
        new LogicIns().findCurrentResIdLogic(res);
    }

    addNewRestaurantEndpoint = (req, res) => {
        let filePath = __dirname + "/uploads/" + req.file.originalname
        this.resInfo.restaurant_name = req.body.restaurant_name
        this.resInfo.restaurant_time = req.body.restaurant_time
        this.resInfo.phone_number = req.body.phone_number
        this.resInfo.canteen_id = req.body.canteen_id
        this.resInfo.religion_id = req.body.religion_id
        this.resInfo.foodtype_id = req.body.foodtype_id
        new LogicIns().addNewRestaurantLogic(filePath, this.resInfo, res);
    }
}
module.exports = {
    EndpointIns
}