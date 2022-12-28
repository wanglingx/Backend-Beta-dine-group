const { LogicIns } = require('./logic');
const model = require('./model');

class EndpointIns {
    constructor() {
        this.resInfo = model.restaurantInfo
        this.menuInfo = model.menuInfo
    }

    findCurrentResIdEndpoint = (req, res) => {
        new LogicIns().findCurrentResIdLogic(res);
    }

    findCanteenIdEndpoint = (req, res) => {
        let canteen_name = req.body.canteen_name;
        new LogicIns().findCanteenIdLogic(canteen_name, res);
    }

    findReligionIdEndpoint = (req, res) => {
        let religion_name = req.body.religion_name;
        new LogicIns().findReligionIdLogic(religion_name, res);
    }

    findFoodtypeIdEndpoint = (req, res) => {
        let foodtype_name = req.body.foodtype_name;
        new LogicIns().findFoodtypeIdLogic(foodtype_name, res);
    }

    addNewRestaurantEndpoint = (req, res) => {
        let filePath;
        if (req.file) {
            filePath = __dirname + "/uploads/" + req.file.originalname
        } else {
            console.log("no file")
            return res.status(401).send({ response: "No such image file!" })
        }
        this.resInfo.restaurant_name = req.body.restaurant_name
        this.resInfo.restaurant_time = req.body.restaurant_time
        this.resInfo.phone_number = req.body.phone_number
        this.resInfo.canteen_name = req.body.canteen_name
        this.resInfo.religion_name = req.body.religion_name
        this.resInfo.foodtype_name = req.body.foodtype_name
        new LogicIns().addNewRestaurantLogic(filePath, this.resInfo, res);
    }

    findCurrentMenuIdEndpoint = (req, res) => {
        new LogicIns().findCurrentMenuIdLogic(res);
    }

    addNewMenuEndpoint = (req, res) => {
        let filePath;
        if (req.file) {
            filePath = __dirname + "/uploads/" + req.file.originalname
        } else {
            console.log("no file")
            return res.status(401).send({ response: "No such image file!" })
        }
        this.menuInfo.restaurant_id = req.params.restaurant_id
        this.menuInfo.menu_name = req.body.menu_name
        this.menuInfo.price = req.body.price
        this.menuInfo.detail = req.body.detail
        new LogicIns().addNewMenuLogic(filePath, this.menuInfo, res);
    }
}
module.exports = {
    EndpointIns
}