const connection = require('../../../database/connection');
class OperatorSearch {

    searchOperator = (search_data,res) => {
        let sql = ` SELECT restaurant_name FROM restaurant
                WHERE restaurant_name LIKE ? `
        connection.query(sql,[search_data],
            function (err, data) {
                if (err) {
                    console.log(err)
                }
                if (data.length <= 0) {
                    sql = `SELECT menu_name FROM menu
                    WHERE menu_name LIKE ?`
                    connection.query(sql, [search_data],
                        function (err, data) {
                            if (err){
                                console.log(err)
                            }
                            if (data.length <= 0) {
                                sql = `SELECT religion_name FROM religion
                                WHERE religion_name LIKE ?`
                                connection.query(sql, [search_data],
                                    function (err, data) {
                                        if (err) {
                                            console.log(err)
                                        }
                                        if (data.length <= 0) {
                                            sql = `SELECT foodtype_name FROM foodtype
                                            WHERE foodtype_name LIKE ?`
                                            connection.query(sql, [search_data],
                                            function (err, data){
                                                if (err) {
                                                    console.log(err)
                                                }
                                                if (data.length <= 0) {
                                                    sql = `SELECT canteen_name FROM canteen
                                                    WHERE canteen_name LIKE ?`
                                                    connection.query(sql, [search_data],
                                                    function (err, data){
                                                        if (err) {
                                                            console.log(err)
                                                        }
                                                        else {
                                                            return res.status(201).send({ response: data });
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                        else
                                        {
                                            return res.status(201).send({ response: data });
                                        }
                                    })
                            }
                            else {
                                return res.status(201).send({ response: data });
                            }
                        })
                }
                else{
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
                    // let religion = religion_id[0].religion_id;
                    // sql1 = `SELECT res_name FROM Restaurant
                    //         WHERE religion_id = ?`
                    // connection.query(sql1, [religion],
                    //     function (err, data) {
                    //         if (err) {
                    //             console.log(err)
                    //         }
                    //         else {
                    //             return res.status(201).send({ response: data });
                    //         }
                    //     })
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

    getRestaurantbyFilter = (filterSearchData, res) => {
        let sql = `SELECT restaurant_name,restaurant_picture FROM restaurant
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
    

}

module.exports = {
    OperatorSearch
}