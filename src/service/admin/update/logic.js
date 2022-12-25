const { response } = require('express');
const axios = require('axios');
const fs = require('fs');
const ImageKit = require("imagekit");
const { OperationUpd } = require('./operator');


var imagekit = new ImageKit({
    publicKey: "public_NqI8bYHueR3o18Oz/88LlXdhCT8=",
    privateKey: "private_uN89TE4OTHZm3bYM52svJ/ajjQE=",
    urlEndpoint: "https://ik.imagekit.io/seproject"
});
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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

    updaterestaurantLogic1 = async( filePath ,resInfo , res) =>{
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

        var fileName = '';
        var charactersLength = characters.length;
        for (var i = 0; i < 12; i++) {
            fileName += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        //get picture and upload
        fs.readFile(filePath , function (err, data) {
            if (err) throw err; // Fail if the file can't be read.
            imagekit.upload({
                file: data, //required
                fileName: fileName+".jpg", //required
                tags: ["tag1", "tag2"]
            }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result);
                    resInfo.restaurant_picture = result.url;
                    console.log("end >>" ,resInfo)
                    new OperationUpd().updateRestaurant(resInfo , res)
                }
            });
        });

        // delete file
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    
    }


    updaterestaurantLogic2 = async( resInfo , res) =>{
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
        
        new OperationUpd().updateRestaurant(resInfo , res)
    }

    updatemenuLogic1 =(filePath,menuInfo ,res) =>{
        var fileName = '';
        var charactersLength = characters.length;
        for (var i = 0; i < 12; i++) {
            fileName += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        //get picture and upload


        fs.readFile(filePath , function (err, data) {
            if (err) throw err; // Fail if the file can't be read.
            imagekit.upload({
                file: data, //required
                fileName: fileName+".jpg", //required
                tags: ["tag1", "tag2"]
            }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result);
                    menuInfo. menu_picture = result.url;
                    console.log("end >>" ,menuInfo)
                    new OperationUpd().updateMenu(menuInfo,res);
                }
            });
        });

        // delete file
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err)
                return
            }
        })
    
    }
    updatemenuLogic2=(menuInfo,res)=>{
        new OperationUpd().updateMenu(menuInfo,res);
    }
}

module.exports = {
    LogicUpd
}