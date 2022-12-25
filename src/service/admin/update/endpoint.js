const { LogicUpd } = require('./logic');
const model = require('./model')
class EndpointUpd {
    constructor() {
        this.resInfo = model.restaurantInfo
        this.menuInfo = model.menuInfo
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
        if(req.file){
            let filePath = __dirname + "/uploads/" + req.file.originalname
            this.resInfo.restaurant_id = req.body.restaurant_id
            this.resInfo.restaurant_name = req.body.restaurant_name
            this.resInfo.restaurant_time = req.body.restaurant_time
            this.resInfo.phone_number = req.body.phone_number
            this.resInfo.canteen_name = req.body.canteen_name
            this.resInfo.foodtype_name = req.body.foodtype_name
            this.resInfo.religion_name = req.body.religion_name
            new LogicUpd().updaterestaurantLogic1(filePath,this.resInfo,res)
        }
        else{
            this.resInfo.restaurant_id = req.body.restaurant_id
            this.resInfo.restaurant_name = req.body.restaurant_name
            this.resInfo.restaurant_time = req.body.restaurant_time
            this.resInfo.phone_number = req.body.phone_number
            this.resInfo.canteen_name = req.body.canteen_name
            this.resInfo.foodtype_name = req.body.foodtype_name
            this.resInfo.religion_name = req.body.religion_name
            this.resInfo.restaurant_picture = req.body.restaurant_picture
            new LogicUpd().updaterestaurantLogic2(this.resInfo,res)

        } 
    }

    updatemenuEndpoint =(req,res) =>{
        if(req.file){
            let filePath = __dirname + "/uploads/" + req.file.originalname
            this.menuInfo.menu_id = req.body.menu_id
            this.menuInfo.menu_name = req.body.menu_name
            this.menuInfo.price = req.body.price
            this.menuInfo.details = req.body.details
            new LogicUpd().updatemenuLogic1(filePath , this.menuInfo ,res)
        }
        else{
            this.menuInfo.menu_id = req.body.menu_id
            this.menuInfo.menu_name = req.body.menu_name
            this.menuInfo.price = req.body.price
            this.menuInfo.details = req.body.details
            this.menuInfo.menu_picture = req.body.menu_picture
            new LogicUpd().updatemenuLogic2(this.menuInfo ,res)
        }
    }
}
module.exports = {
    EndpointUpd
}