const express = require('express');
const routes = require("./routes/router");
const server = express();
const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./database/config');

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(routes);

// Server port listen in server port 3000
server.listen(port, function (err,res) {
    if (err) {
        return res.status(500).send("Cannot connect server");
    }
    else {
        console.log(`Server started on port ${port}`);
        console.log(`[Starting] http://localhost:${port}/`);
    }
})