const { OperatorScore } = require('./operator')
const axios = require('axios');

class LogicScore {

    getScoreRestuarantLogic = (res_id, res) => {
        new OperatorScore().getScoreRestuarantOperator(res_id, res);
    }

    addScoreResruarantLogic = async (scoreRes, res) => {
        if (!scoreRes) {
            return res.status(200).send("No input score");
        }
        else {
            let response = await axios.post('http://localhost:3000/getScoreRestuarant', { res_id: scoreRes.res_id });
                scoreRes.res_point += response.data.response[0].res_point;
                new OperatorScore().addScoreResruarantOperator(scoreRes, res);
        }
    }

    getScoreFoodLogic = (menu_id, res) => {
        new OperatorScore().getScoreFoodOperator(menu_id, res);
    }

    addScoreFoodLogic = async (scoreFood, res) => {
        if (!scoreFood) {
            return res.status(200).send("No input score");
        }
        else {
            let response = await axios.post('http://localhost:3000/getScoreFood', { menu_id: scoreFood.menu_id });
            scoreFood.point_food += response.data.response[0].point_food;
            new OperatorScore().addScoreFoodOperator(scoreFood, res);
        }
    }
}
module.exports = {
    LogicScore
}