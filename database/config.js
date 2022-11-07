const readYamlFile = require('read-yaml-file')
const mysql = require('mysql');

readYamlFile('./config/db.yaml').then(data => {
    
    const connect = mysql.createConnection({
            host: data.host,
            database: data.database,
            port: data.port,
            user: data.user,
            password: data.password,
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
})

