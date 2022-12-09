const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'seProject',
        port: 3306,
        user: 'root',
        password: 'bew224002544'
    });

    connection.connect(function (err) {
        if (err) {
            console.log("Database connection fualt");
        }
        else {
            console.log("Database Connected!")
        }
    });
    
module.exports = connection;



