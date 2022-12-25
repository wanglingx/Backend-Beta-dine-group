const { response } = require('express');
const axios = require('axios');
const ImageKit = require("imagekit");
const { OperationUpd } = require('./operator');
class LogicUpd {
    checkcanteennameLogic = (canteenname , res) =>{
        if(canteenname=='วิทย์') canteenname = 'วิทย'
        new OperationUpd().checkcanteen(canteenname,res)
    }
    checkreligionnameLogic = (religionname , res) =>{
        new OperationUpd().checkreligion(religionname ,res)
    }
    checkfoodtypenameLogic = (foodtypename , res) =>{
        new OperationUpd().checkfoodtype(foodtypename , res)
    }

    updaterestaurantLogic = async( resInfo , res) =>{
        console.log("c >>>>>", resInfo.canteen_name)
        var urlcanteen = `http://localhost:3000/checkcanteen/${resInfo.canteen_name}`
        var urlcanteenendcode = encodeURI(urlcanteen)
        let responsecanteen = await axios.get(urlcanteenendcode)
        resInfo.canteen_id = responsecanteen.data.response[0].canteen_id

        var urlreligion = `http://localhost:3000/checkreligion/${resInfo.religion_name}`
        var urlreligionendcode = encodeURI(urlreligion)
        let responsereligion = await axios.get(urlreligionendcode)
        resInfo.religion_id = responsereligion.data.response[0].religion_id

        var urlfoodtype = `http://localhost:3000/checkrefoodtype/${resInfo.foodtype_name}`
        var urlfoodtypeendcode = encodeURI(urlfoodtype)
        let responsefoodtype = await axios.get(urlfoodtypeendcode)
        resInfo.foodtype_id = responsefoodtype.data.response[0].foodtype_id

        console.log(resInfo)
    
    }
}

module.exports = {
    LogicUpd
}