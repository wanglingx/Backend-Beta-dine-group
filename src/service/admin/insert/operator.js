const connection = require('../../../../database/connection');
class OperationIns {

    findCurrentResIdOperator = (res) => {
        let sql = `SELECT restaurant_id FROM restaurant ORDER BY restaurant_id DESC LIMIT 1`
        connection.query(sql, function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    findCanteenIdOperator = (canteen_name, res) => {
        let sql = `SELECT canteen_id FROM canteen WHERE canteen_name = ?`
        connection.query(sql,[canteen_name] ,function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    findReligionIdOperator = (religion_name, res) => {
        let sql = `SELECT religion_id FROM religion WHERE religion_name = ?`
        connection.query(sql, [religion_name], function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    findFoodtypeIdOperator = (foodtype_name, res) => {
        let sql = `SELECT foodtype_id FROM foodtype WHERE foodtype_name = ?`
        connection.query(sql, [foodtype_name], function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    addNewRestaurantOperator = (resInfo, res) => {
        let sql = ` INSERT INTO restaurant(
                        restaurant_id,
                        restaurant_name,
                        restaurant_time,
                        phone_number,
                        restaurant_score,
                        restaurant_picture,
                        canteen_id,
                        religion_id,
                        foodtype_id,
                        restaurant_timestamp
                    ) 
                    VALUES 
                    (
                        ?,?,?,?,?,?,?,?,?, CURRENT_TIMESTAMP());`
        connection.query(sql, [
            resInfo.restaurant_id,
            resInfo.restaurant_name,
            resInfo.restaurant_time,
            resInfo.phone_number,
            resInfo.restaurant_score,
            resInfo.restaurant_picture,
            resInfo.canteen_id,
            resInfo.religion_id,
            resInfo.foodtype_id
        ], function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: "add new restaurant success!" })
            }
        })
    }

    findCurrentMenuIdOperator = (res) => {
        let sql = `SELECT menu_id FROM menu ORDER BY menu_id DESC LIMIT 1`
        connection.query(sql, function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }
   
    addNewMenuOperator = (menuInfo, res) => {
        let sql = ` INSERT INTO menu(
                        menu_id,
                        menu_name,
                        price,
                        detail,
                        score,
                        menu_picture,
                        restaurant_id,
                        menu_timestamp
                    ) 
                    VALUES 
                    (
                        ?,?,?,?,?,?,?, CURRENT_TIMESTAMP());`
        connection.query(sql, [
            menuInfo.menu_id,
            menuInfo.menu_name,
            menuInfo.price,
            menuInfo.detail,
            menuInfo.score,
            menuInfo.menu_picture,
            menuInfo.restaurant_id,
        ], function (err, data) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send({ response: "add new menu success!"})
            }
        })
    }
}
module.exports = {
    OperationIns
}