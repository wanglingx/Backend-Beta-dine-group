const { LogicUpd } = require('./logic');
const model = require('./model')
class EndpointUpd {
    constructor() {
        this.resInfo = model.restaurantInfo
    }
    checkcanteennameEndpoint = (req,res) =>{
        let canteenname= req.params.canteen_name
        new LogicUpd().checkcanteennameLogic(canteenname,res)
    }
    checkreligionnameEndpoint = (req,res) =>{
        let religionname= req.params.religion_name
        new LogicUpd().checkreligionnameLogic(religionname,res)
    }
    checkfoodtypenameEndpoint = (req,res) =>{
        let foodtypename= req.params.foodtype_name
        new LogicUpd().checkfoodtypenameLogic(foodtypename,res)
    }

    updaterestaurantEndpoint = (req,res) =>{
        // if(req.file.originalname != null){let filePath = __dirname + "/uploads/" + req.file.originalname}
        // else{let filePath =""}
        this.resInfo.restaurant_id = req.body.restaurant_id
        this.resInfo.restaurant_name = req.body.restaurant_name
        this.resInfo.restaurant_time = req.body.restaurant_time
        this.resInfo.phone_number = req.body.phone_number
        this.resInfo.canteen_name = req.body.canteen_name
        this.resInfo.foodtype_name = req.body.foodtype_name
        this.resInfo.religion_name = req.body.religion_name
        console.log(this.resInfo)
        //this.resInfo.restaurant_picture = req.body.restaurant_picture
        new LogicUpd().updaterestaurantLogic(this.resInfo,res)
    }
}
module.exports = {
    EndpointUpd
}