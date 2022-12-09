const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
<<<<<<< HEAD
        database: 'seproject',
        port: 3306,
        user: 'root',
        password: 'Dodo0989263290'
=======
        database: 'seProject',
        port: 3306,
        user: 'root',
        password: 'bew224002544'
>>>>>>> 89a10c5e2e0756e82d22e1f1bc1f8c02e72e993f
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    
module.exports = connection;



