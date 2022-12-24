const connection = require('../../../../database/connection');
class OperationAdmin {
    getUserLoginOperation = (username, password, res) => {
        let sql = `SELECT *
                    FROM admin
                    WHERE admin_id = ? 
                    AND password = ?`
        connection.query(sql, [username, password],
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                else
                    console.log("หาเจอแล้ว");
                    console.log(result);
                res.status(200).send({ response: result })
            })

    }
}
module.exports = {
    OperationAdmin
}