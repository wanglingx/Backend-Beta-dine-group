const express = require('express');
const router = express.Router()
const { Endpoint } = require('../controller/endpoint');

//router.get("/getData", new Entrance().sentAllDataEntrance);

router.get('/', (req, res) => {
    return res.render('../view/pages/index.ejs')
})

module.exports = router;