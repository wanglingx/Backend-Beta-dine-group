const connection = require('../../../database/connection');
class OperatorScore {
    getUserOperator = (student_id, res) => {
        let sql = `SELECT * FROM user
                    WHERE student_id = ?`
        connection.query(sql, [
            student_id
        ], function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    getUpdateScore = (update_score, res) => {
        let sql = `SELECT * FROM update_rank WHERE user_id = ? AND menu_id=?`
        connection.query(sql, [
            update_score.user_id,
            update_score.menu_id
        ], function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: data });
            }
        })
    }

    addUserOperator = (User, res) => {
        let sql = `INSERT INTO user(user_id,student_id,firstname,lastname,status,user_timestamp)
                    VALUES(?,?,?,?,0,CURRENT_TIMESTAMP())`
        connection.query(sql, [
            User.user_id,
            User.student_id,
            User.firstname,
            User.lastname,
        ], function (err) {
            if (err) {
                console.log(err)
                res.status(400).send({ response: "Add user fail!" })
            }
            else {
                return res.status(201).send({ response: "Add user success!" });
            }
        })
    }

    addScoreOperator = (user_id, menu_id, score,comment, res) => {
        let sql = `INSERT INTO update_rank(user_id,menu_id,score,comment,ur_timestamp)
                   VALUES(?,?,?,?,CURRENT_TIMESTAMP())`
        connection.query(sql, [
            user_id,
            menu_id,
            score,
            comment
        ], function (err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({ response: "You're Done!" })
            }
        })
    }

    UpdateScore24HOperator = (update_score, res) => {
        let sql = `UPDATE update_rank
                   SET score = ?,
                   comment = ?
                   ur_timestamp = CURRENT_TIMESTAMP()
                   WHERE user_id = ? AND menu_id = ?`
        connection.query(sql, [
            update_score.score,
            update_score.comment,
            update_score.user_id,
            update_score.menu_id
        ], function (err) {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(201).send({response : "You're Done!"})
            }
        })
    }
}
module.exports = {
    OperatorScore
}