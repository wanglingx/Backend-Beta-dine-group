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
                return res.status(201).send("add new restaurant success!")
            }
        })
    }

    // findCurrentResIdOperator = (res) => {
    //     let sql = `SELECT menu_id FROM menu ORDER BY menu _id DESC LIMIT 1`
    //     connection.query(sql, function (err, data) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             return res.status(201).send({ response: data });
    //         }
    //     })
    // }
   
}
module.exports = {
    OperationIns
}