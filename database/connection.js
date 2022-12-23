const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'seProject',
        port: 3306,
        user: 'root',
        password: 'bew224002544'
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
module.exports = connection;



