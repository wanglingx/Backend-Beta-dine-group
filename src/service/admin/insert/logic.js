const { OperationIns } = require('./operator');
const axios = require('axios');
const fs = require('fs');
const ImageKit = require("imagekit");

class LogicIns {

    findCurrentResIdLogic = (res) => {
        new OperationIns().findCurrentResIdOperator(res);
    }

    findCanteenIdLogic = (canteen_name, res) => {
        new OperationIns().findCanteenIdOperator(canteen_name, res);
    }

    findReligionIdLogic = (religion_name, res) => {
        new OperationIns().findReligionIdOperator(religion_name, res);
    }

    findFoodtypeIdLogic = (foodtype_name, res) => {
        new OperationIns().findFoodtypeIdOperator(foodtype_name, res);
    }

    addNewRestaurantLogic = async (filePath , resInfo , res) => {
        //validate Info
        if (!resInfo.restaurant_name || !resInfo.restaurant_time || !resInfo.phone_number || !resInfo.canteen_name || !resInfo.religion_name || !resInfo.foodtype_name || !filePath) {
            // delete file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
            return res.status(401).send({ response: "cannot add new restaurant!" })
        }

        /** find canteen id  */
        let responseCanteen = await axios.post('http://localhost:3000/findCanteen-id', { canteen_name: resInfo.canteen_name })
        resInfo.canteen_id = responseCanteen.data.response[0].canteen_id
        console.log("found canteen id!")
        /** find religion_id */
        let responseReligion = await axios.post('http://localhost:3000/findReligion-id', { religion_name: resInfo.religion_name })
        resInfo.religion_id = responseReligion.data.response[0].religion_id
        console.log("found religion id!")
        /** find foodtype_id */
        let responseFoodtype = await axios.post('http://localhost:3000/findFoodtype-id', { foodtype_name: resInfo.foodtype_name })
        resInfo.foodtype_id = responseFoodtype.data.response[0].foodtype_id
        console.log("found foodtype id!")
        
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

        fs.readFile(filePath, function (err, data) {
            if (err)
                throw err; // Fail if the file can't be read.
            imagekit.upload({
                file: data,
                fileName: fileName,
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

    addNewMenuLogic = async (filePath, menuInfo, res) => {
        //validate Info
        if (!menuInfo.menu_name || !menuInfo.price || !menuInfo.detail || !filePath) {
            // delete file
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
            return res.status(401).send({ response: "cannot add new menu!" })
        }

        //get current Id
        let response = await axios.get('http://localhost:3000/findCurrentMenuId')
        let menuID = response.data.response[0].menu_id
        let menuID_cur = menuID.slice(4)
        // ID generator
        menuID = parseInt(menuID_cur, 10)
        menuInfo.menu_id = 'MENU' + (menuID + 1)
        console.log(menuInfo.menu_id);

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

        fs.readFile(filePath, function (err, data) {
            if (err) throw err; // Fail if the file can't be read.
            imagekit.upload({
                file: data, //required
                fileName: fileName, //required
                tags: ["tag1", "tag2"]
            }, function (error, result) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(result);
                    menuInfo.menu_picture = result.url;
                    new OperationIns().addNewMenuOperator(menuInfo, res);
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
}

module.exports = {
    LogicIns
}