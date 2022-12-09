const connection = require('../../../database/connection');
class OperatorRank {
    getScorebyMenuOperator = (menu_id, res) => {
        let sql = ` SELECT AVG(score) AS score 
                    FROM update_rank 
                    WHERE menu_id=?`
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

    addMenuScoreOperator = (MenuScore, res) => {
        let sql = ` UPDATE menu 
                    SET score = ?, 
                    menu_timestamp = CURRENT_TIMESTAMP()
                    WHERE menu_id = ?`
        connection.query(sql, [
            MenuScore.score,
            MenuScore.menu_id
        ], function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: "menu score updated successful!" });
            }
        })
    }

    getMenuInfoOperator = (menu_id, res) => {
        let sql = ` SELECT restaurant_id  
                    FROM menu
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
    
    addRestaurantScoreOperator = (MenuScore, res) => {
        let sql = ` UPDATE restaurant
                    SET restaurant_score = ?, 
                    restaurant_timestamp = CURRENT_TIMESTAMP()
                    WHERE restaurant_id = ?`
        connection.query(sql, [
            MenuScore.score,
            MenuScore.restaurant_id
        ], function (err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: "Restaurant score updated successful!" });
            }
        })
    }

    getAvgRestaurantOperator = (MenuScore, res) => {
        let sql = ` SELECT AVG(score) AS score 
                    FROM menu 
                    WHERE restaurant_id = ?`
        connection.query(sql, [
            MenuScore.restaurant_id
        ], function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }
}

module.exports = {
    OperatorRank
}