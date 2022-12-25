const { OperationIns } = require('./operator');
const axios = require('axios');
const fs = require('fs');
const ImageKit = require("imagekit");

class LogicIns {
    findCurrentResIdLogic = (res) => {
        new OperationIns().findCurrentResIdOperator(res);
    }

    addNewRestaurantLogic = async (filePath , resInfo , res) => {
        //validate Info
        if (!resInfo.restaurant_name || !resInfo.restaurant_time || !resInfo.phone_number || !resInfo.canteen_id || !resInfo.religion_id || !resInfo.foodtype_id || !filePath) {
            // delete file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
            return res.status(401).send("cannot add new restaurant!")
        }
        
        //get current Id
        let response = await axios.get('http://localhost:3000/findCurrentResId')
        let resID = response.data.response[0].restaurant_id
        let restaurantID_cur = resID.slice(3)
        // ID generator
        resID = parseInt(restaurantID_cur, 10)
        resInfo.restaurant_id = 'RES' + (resID+1)
        console.log(resInfo.restaurant_id);

        var fileName = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 12; i++) {
            fileName += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        //get picture and upload
        var imagekit = new ImageKit({
            publicKey: "public_yuHGYXePYBfzQcqjS7as5gj6bXE=",
            privateKey: "private_Zr8viG92GnE7UNwzAQN0DhLyiwc=",
            urlEndpoint: "https://ik.imagekit.io/wanglingx/Se-project/"
        });

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
                    new OperationIns().addNewRestaurantOperator(resInfo, res);
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

    findCurrentMenuIdLogic = (res) => {
        new OperationIns().findCurrentMenuIdOperator(res);
    }
}

module.exports = {
    LogicIns
}