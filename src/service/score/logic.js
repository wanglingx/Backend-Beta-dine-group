const { OperatorScore } = require('./operator')
const axios = require('axios');
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 })
const url = 'http://localhost:3000'

class LogicScore {

    // getScoreRestuarantLogic = (res_id, res) => {
    //     new OperatorScore().getScoreRestuarantOperator(res_id, res);
    // }

    // addScoreResruarantLogic = async (scoreRes, res) => {
    //     if (!scoreRes) {
    //         return res.status(200).send("No input score");
    //     }
    //     else {
    //         let response = await axios.post('http://localhost:3000/getScoreRestuarant', { res_id: scoreRes.res_id });
    //             scoreRes.res_point += response.data.response[0].res_point;
    //             new OperatorScore().addScoreResruarantOperator(scoreRes, res);
    //     }
    // }

    getScoreFoodLogic = (menu_id, res) => {
        new OperatorScore().getScoreFoodOperator(menu_id, res);
    }

    showFoodScoreLogic = async (res) => {
        let  uniqueKey = 'ScoreKeyFood'
        if (myCache.has(uniqueKey)) {
            console.log('Food score value from cache');
            return res.status(201).send(myCache.get(uniqueKey));
        }
        else {
            let response = await axios.get(url + '/getScoreFood')
            myCache.set(uniqueKey, response);
            return res.status(201).send(response);
        }
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