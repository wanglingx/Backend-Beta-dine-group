const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'betadine-project',
        port: 3306,
        user: 'root',
        password: '1234'
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
module.exports = connection;



