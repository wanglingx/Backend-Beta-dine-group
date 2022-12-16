const connection = require('../../../database/connection');
class OperatorSearch {

    searchOperator = (search_data, res) => {
        search_data = "%" + search_data + "%"
        console.log(search_data)
        let sql = ` SELECT restaurant_id , restaurant_name FROM restaurant
                WHERE restaurant_name LIKE ? `
        connection.query(sql, [search_data],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                if (data.length <= 0) {
                    sql = `SELECT menu_id , menu_name FROM menu
                    WHERE menu_name LIKE ?;`
                    connection.query(sql, [search_data],
                        function (err, data) {
                            if (err) {
                                console.log(err)
                            }
                            if (data.length <= 0) {
                                sql = `SELECT religion_id , religion_name FROM religion
                                WHERE religion_name LIKE ?;`
                                console.log(search_data)
                                connection.query(sql, [search_data],
                                    function (err, data) {
                                        if (err) {
                                            console.log(err)
                                        }
                                        if (data.length <= 0) {
                                            sql = `SELECT foodtype_id , foodtype_name FROM foodtype
                                            WHERE foodtype_name LIKE ?;`
                                            connection.query(sql, [search_data],
                                                function (err, data) {
                                                    if (err) {
                                                        console.log(err)
                                                    }
                                                    if (data.length <= 0) {
                                                        sql = `SELECT canteen_id , canteen_name FROM canteen
                                                    WHERE canteen_name LIKE ?;`
                                                        connection.query(sql, [search_data],
                                                            function (err, data) {
                                                                if (err) {
                                                                    console.log(err)
                                                                }
                                                                else {
                                                                    return res.status(201).send({ response: data });
                                                                }
                                                            })
                                                    }
                                                    else {
                                                        return res.status(201).send({ response: data });
                                                    }
                                                })
                                        }
                                        else {
                                            return res.status(201).send({ response: data });
                                        }
                                    })
                            }
                            else {
                                return res.status(201).send({ response: data });
                            }
                        })
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }

    searchbyReligionOperator = (religion_name, res) => {
        let sql = `SELECT religion_id FROM religion
                WHERE religion_name = ?`
        connection.query(sql, [religion_name],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }
    searchbyTypeOperator = (foodtype_name, res) => {
        let sql = `SELECT foodtype_id FROM foodtype
                WHERE foodtype_name = ?`
        connection.query(sql, [foodtype_name],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }
    searchbyCanteenOperator = (canteen_name, res) => {
        let sql = `SELECT canteen_id FROM canteen
                WHERE canteen_name = ?`
        connection.query(sql, [canteen_name],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }
    searchbyMenuOperator = (menu_name, res) => {
        let sql = `SELECT menu_id FROM menu
                WHERE menu_name = ?`
        connection.query(sql, [menu_name],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }

    getRestaurantbyFilter = (filterSearchData, res) => {
        let sql = `SELECT restaurant_id , restaurant_name,restaurant_picture FROM restaurant
                    WHERE foodtype_id = ? OR religion_id = ?`
        connection.query(sql, [
            filterSearchData.type_id,
            filterSearchData.religion_id
        ],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).send({ response: data });
                }
            }
        )
    }

    getRestaurantbyCanteenFilter = (filterSearchData, res) => {
        let sql = `SELECT restaurant_id ,restaurant_name,restaurant_picture FROM restaurant 
        INNER JOIN menu ON restaurant.restaurant_id = menu.restaurant_id 
        WHERE restaurant.canteen_id = ? AND menu.menu_id = ?`
        console.log("1 >>" + filterSearchData.canteen_id + " 2 >>" + filterSearchData.menu_id)
        connection.query(sql, [
            filterSearchData.canteen_id,
            filterSearchData.menu_id
        ],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).send({ response: data });
                }
            }
        )
    }

    getRestaurantbyTypeFilter = (filterSearchData, res) => {
        let sql = `SELECT restaurant_id ,restaurant_name,restaurant_picture FROM restaurant
                    WHERE foodtype_id = ? OR religion_id = ?`
        connection.query(sql, [
            filterSearchData.type_id,
            filterSearchData.religion_id
        ],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).send({ response: data });
                }
            }
        )
    }
    getRestaurantbyTypeCanteenFilter = (filterSearchData, res) => {
        let sql = `SELECT restaurant_id ,restaurant_name,restaurant_picture FROM restaurant
                    WHERE foodtype_id = ? OR canteen_id = ?`
        connection.query(sql, [
            filterSearchData.type_id,
            filterSearchData.religion_id
        ],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.status(201).send({ response: data });
                }
            }
        )
    }
    getRestaurantbyScoreFilter = (restaurant_score, res) => {
        let sql = `SELECT restaurant_id ,restaurant_name,restaurant_picture FROM restaurant
                WHERE restaurant_score = ?`
        connection.query(sql, [restaurant_score],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }
    getRestaurantbyCanteenOnlyFilter = (canteen_id, res) => {
        let sql = `SELECT restaurant_id ,restaurant_name,restaurant_picture FROM restaurant
                WHERE canteen_id = ?`
        connection.query(sql, [canteen_id],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }
    getRestaurantbyTypeOnlyFilter = (foodtype_id, res) => {
        let sql = `SELECT restaurant_id , restaurant_name,restaurant_picture FROM restaurant
                WHERE foodtype_id = ?`
        connection.query(sql, [foodtype_id],
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    return res.status(201).send({ response: data });
                }
            })
    }
    getRestaurantbyReligionOnlyFilter = (religion_id, res) => {
        let sql = `SELECT restaurant_id , restaurant_name,restaurant_picture FROM restaurant
                WHERE religion_id = ?`
        connection.query(sql, [religion_id],
            function (err, data) {
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
    OperatorSearch
}