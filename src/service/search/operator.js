const connection = require('/database/config');
class OperatorSearch {

    searchOperator = (search_data,res) => {
        let sql = ` SELECT res_name FROM Restaurant
                WHERE res_name LIKE ? `
        connection.query(sql,[search_data],
            function (err, data) {
                if (err) {
                    sql = `SELECT menu_name FROM Menu
                    WHERE menu_name LIKE ?`
                    connection.query(sql, [search_data],
                        function (err, data) {
                            if (err) {
                                console.log(err)
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

    searchbyReligionOperator = (religion_name, res) => {
        let sql = `SELECT religion_id FROM Religion
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

    searchbyTypeOperator = (type_name, res) => {
        let sql = `SELECT type_id FROM Food_type
                WHERE type_name = ?`
        connection.query(sql, [type_name],
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
        let sql = `SELECT res_name,pic FROM Restaurant
                    WHERE type_id = ? OR religion_id = ?`
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