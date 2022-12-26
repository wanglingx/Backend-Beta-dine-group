const { LogicAdmin } = require('./logic');
const model = require('./model');
class EndpointAdmin {
    
    loginEndpoint = (req, res) => {
        let username = req.query.username;
        let password = req.query.password;
        console.log(username)
        console.log(password)
        new LogicAdmin().loginLogic(username, password , res);
    }
    getPasswordMaching = (req, res) => {
        let username = req.body.username
        let password = req.body.password
        new LogicAdmin().getPasswordMachingLogic(username, password, res);
    }
}
module.exports = {
    EndpointAdmin
}