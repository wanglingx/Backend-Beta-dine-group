const mysql = require('mysql');

    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'betadine-project',
        port: 3306,
        user: 'root',
        password: ''
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



