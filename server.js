const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const routes = require("./routes/router");
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');

// For Master process
if (cluster.isMaster) {
    console.log(`[ Master ]${process.pid} is running`);
    console.log(`[starting] http://localhost:${port}/`);
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });
}

else {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet())
    app.use(express.json());
    app.use(routes);
    app.listen(port, err => {
        err ?
            console.log("Error in server setup") :
            console.log(`[ Worker ] ${process.pid} started`);
    });
}

//library express of node js
// const express = require('express');
// const server = express();
// const routes = require("./routes/router");
// const cors = require('cors');
// const helmet = require('helmet');
// const bodyParser = require('body-parser');

// const port = process.env.PORT || 3000

// server.use(bodyParser.urlencoded({ extended: false }));
// server.use(bodyParser.json())
// server.use(cors());
// server.use(helmet())
// server.use(express.json());
// server.use(routes);

// // Server port listen in server port 3000
// server.listen(port, function (err) {
//     console.log(` [HOST] http://localhost:${port}`);
// })

