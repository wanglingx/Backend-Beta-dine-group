const { OperationAdmin } = require('./operator');
const axios = require('axios');
class LogicAdmin {
    loginLogic = async(username, password, res) => {

        //element filed empty
        if (!username) {
            return res.status(400).send({ response: "กรุณากรอกUsername" });
        }
        if (!password) {
            return res.status(400).send({ response: "กรุณากรอกรหัสผ่าน" });
        }

        //find data on database
        let response = await axios.post('http://localhost:3000/getPasswordMaching', { username: username, password: password });
        let resLength = parseInt(response.data.response.length)

        //validaton password and email matching 
        if (resLength == 0) {
            return res.status(400).send({ response: "usernameหรือรหัสผ่านไม่ถูกต้อง" });
        }
    }
    getPasswordMachingLogic = (username, password, res) => {
        new OperationAdmin().getUserLoginOperation(username, password, res);
    }
}

module.exports = {
    LogicAdmin
}