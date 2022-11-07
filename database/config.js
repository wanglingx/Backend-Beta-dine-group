const mysql = require('mysql');

const connect = mysql.createConnection({
        host: 'localhost',
        database: '',
        port: 3306,
        user: 'root',
        password: '',
});

connect.connect(function (err) {
        if (err) {
            console.log("Database connection fualt");
        }
        else {
            console.log("Database Connected!")
        }
});

module.exports = connect;

