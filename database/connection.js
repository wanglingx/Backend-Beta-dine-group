const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        database: 'seproject',
        port: 3306,
        user: 'root',
        password: 'Dodo0989263290'
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
module.exports = connection;



