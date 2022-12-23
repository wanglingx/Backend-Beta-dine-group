const { OperatorScore } = require('./operator')
const axios = require("axios")

class LogicScore {

    getUserLogic = (student_id, res) => {
        new OperatorScore().getUserOperator(student_id, res);
    }

    getScoreFoodLogic = (update_score, res) => {
        new OperatorScore().getUpdateScore(update_score, res);
    }

    addUserLogic = (User, res) => {
        new OperatorScore().addUserOperator(User, res);
    }

    addScoreLogic =  async(User, Update_score, res) => {
        var user_id = '';
        let response = await axios.get(`http://localhost:3000/getUser/${User.student_id}`);
        let response_length = response.data.response.length;
        if (response_length == 0) {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < 15; i++) {
                user_id += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            User.user_id = user_id + Math.floor(Math.random() * 100) + 1;
            await axios.post('http://localhost:3000/addUser', { student_id: User.student_id, firstname: User.firstname, lastname: User.lastname })
            console.log("Create user successful!")
        }
        else {
            User.user_id = response.data.response[0].user_id
            console.log("Your were user!")
        }

        Update_score.user_id = User.user_id;
        
        let response1 =  await axios.get(`http://localhost:3000/getScore/${Update_score.user_id}/${Update_score.menu_id}`);
        let response_length1 = response1.data.response.length;
        if (response_length1 == 0) {
            await axios.post('http://localhost:3000/addScoreUpdateRank', { user_id: Update_score.user_id, menu_id: Update_score.menu_id, score: Update_score.score });
            console.log("User score added successful!")
        }
        else {
            //validate timmer
            let timestamp = response1.data.response[0].ur_timestamp;
            const date = new Date(timestamp);
            const dateNow = new Date();

            var delta = Math.abs(dateNow - date) / 1000;
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;

            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;

            var minutes = Math.floor(delta / 60) % 60;
            delta -= minutes * 60;
            console.log(hours + ":" + minutes);
            //if 24 hr delete
            if (hours >= 24) {
                new OperatorScore().UpdateScore24HOperator(Update_score, res);
                console.log("Update new score success!")
            }
            else {
                return res.status(400).send("ํYou were added point this menu! Comeback in the next 24 Hours")
            }
        }
        await axios.get(`http://localhost:3000/addMenuScore/${Update_score.menu_id}`)
        return res.status(201).send({ response: "You're Done!" })
    }

    addScoreUpdateRankLogic = (user_id, menu_id, score, res) => {
        new OperatorScore().addScoreOperator(user_id, menu_id, score, res);
    }
}

module.exports = {
    LogicScore
}