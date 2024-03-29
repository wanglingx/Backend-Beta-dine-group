const { OperationAdmin } = require('./operator');
const axios = require('axios');
class LogicAdmin {
    loginLogic = async( username, password, res) => {
        //element filed empty
        if (!username) {
            return res.status(400).send({ response: "กรุณากรอก Username" });
        }
        if (!password) {
            return res.status(400).send({ response: "กรุณากรอกรหัสผ่าน" });
        }

        //find data on database
        let response = await axios.post('http://localhost:3000/getPasswordMaching', { username: username, password: password });
        let resLength = parseInt(response.data.response.length)

        //validaton password and email matching 
        if (resLength == 0) {
            return res.status(400).send({ response: "username หรือ รหัสผ่านไม่ถูกต้อง" });
        }
        
        else {
            new OperationAdmin().updateLastLogin(username);
            console.log({ msg: "เข้าสู่ระบบสำเร็จ" })
            return res.status(200).send({ response: username });
        }
    }
    getPasswordMachingLogic = (username, password, res) => {
        new OperationAdmin().getUserLoginOperation(username, password, res);
    }
}

module.exports = {
    LogicAdmin
}