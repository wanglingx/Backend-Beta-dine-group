const express = require('express');
const server = express();
const axios = require('axios')

const servers = [
    "http://localhost:3001",
    "http://localhost:3002"
]

let current_state = 0;
const handler = async (req, res) => {
    const { method, url, headers, body } = req;
    const serv = servers[current_state];
    current_state === (servers.length - 1) ? current_state = 0 : current_state++
    
    try {
        const response = await axios({
            url: `${serv}${url}`,
            method: method,
            headers: headers,
            data: body
        });

        res.send(response.data)
    }
    catch (err) {
        res.status(500).send("Server error!")
    }
}

server.use((req, res) => {
    handler(req, res)
});

server.listen(3000, err => {
    err ?
        console.log("Failed to listen on PORT 3000") :
        console.log("Load Balancer Server "
            + "listening on PORT 3000");
})