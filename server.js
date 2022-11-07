const express = require('express');
const routes = require("./routes/router");
const server1 = express();
const server2 = express();
const port1 = process.env.PORT || 3000
const port2 = process.env.PORT || 3001

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./database/config');

const handler = num => (req, res) => {
    const { method, url, headers, body } = req;
    res.send('Response from server ' + num);
}

server1.get('*', handler(1)).post('*', handler(1));
server2.get('*', handler(2)).post('*', handler(2));

server1.use(bodyParser.json())
server1.use(bodyParser.urlencoded({ extended: false }));
server1.use(cors());
server1.use(helmet());
server1.use(express.json());
server1.use(routes);

server2.use(bodyParser.json())
server2.use(bodyParser.urlencoded({ extended: false }));
server2.use(cors());
server2.use(helmet());
server2.use(express.json());
server2.use(routes);

// Server port listen in server port 3000
server1.listen(port1, function (err,res) {
    if (err) {
        return res.status(500).send("Cannot connect server");
    }
    else {
        console.log(`Server started on port ${port1}`);
        console.log(`[Starting] http://localhost:${port1}/`);
    }
})

server2.listen(port2, function (err, res) {
    if (err) {
        return res.status(500).send("Cannot connect server");
    }
    else {
        console.log(`Server started on port ${port2}`);
        console.log(`[Starting] http://localhost:${port2}/`);
    }
})