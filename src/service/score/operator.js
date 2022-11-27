const connection = require('../../../database/connection');
class OperatorScore {

    // getScoreRestuarantOperator = (res_id, res) => {
    //     let sql = `SELECT point_res FROM Restuarant
    //                 WHERE res_id = ?`
    //     connection.query(sql, [
    //         res_id
    //     ],function (err, data) {
    //         if (err) {
    //             console.log(err);
    //         }
    //         else {
    //             return res.status(201).send({ response: data });
    //         }
    //     })
    // }

    // addScoreResruarantOperator = (scoreRes, res) => {
    //     let sql = `UPDATE Restuarant SET point_res = ? WHERE res_id = ?`
    //     connection.query(sql, [
    //         scoreRes.res_point,
    //         scoreRes.res_id
    //     ], function (err) {
    //         if (err) {
    //             console.log(err)
    //         }
    //         else {
    //             return res.status(201).send("Your Done!")
    //         }
    //     })
    // }

    getScoreFoodOperator = (menu_id, res) => {
        let sql = `SELECT * FROM menu
                    WHERE menu_id = ?`
        connection.query(sql, [
            menu_id
        ], function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    addScoreFoodOperator = (scoreFood, res) => {
        let sql = `UPDATE Menu SET point_food = ? WHERE menu_id = ?`
        connection.query(sql, [
            scoreFood.point_food,
            scoreFood.menu_id
        ], function (err) {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(201).send("Your Done!")
            }
        })
    }

}
module.exports = {
    OperatorScore
}