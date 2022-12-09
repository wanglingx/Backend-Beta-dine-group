const { OperatorRank } = require('./operator');
const axios = require('axios');
class LogicRank {
    getScorebyMenuLogic = (menu_id, res) => {
        new OperatorRank().getScorebyMenuOperator(menu_id, res);
    }

    addMenuScoreLogic = async (MenuScore, res) => {
        let response = await axios.get(`http://localhost:3000/getScorebyMenu/${MenuScore.menu_id}`)
        MenuScore.score = response.data.response[0].score;
        new OperatorRank().addMenuScoreOperator(MenuScore, res);
        console.log("Menu score added successful!")

        await axios.get(`http://localhost:3000/addRestaurantScore/${MenuScore.menu_id}`)
        console.log("Restaurant score added successful!")
    }

    getMenuInfoLogic = (menu_id, res) => {
        new OperatorRank().getMenuInfoOperator(menu_id, res)
    }

    addRestaurantScoreLogic = async (MenuScore, res) => {
        let response = await axios.get(`http://localhost:3000/getMenuInfo/${MenuScore.menu_id}`)
        MenuScore.restaurant_id = response.data.response[0].restaurant_id;

        let response1 = await axios.get(`http://localhost:3000/getAvgRestaurant/${MenuScore.restaurant_id}`)
        MenuScore.score = response1.data.response[0].score;
        new OperatorRank().addRestaurantScoreOperator(MenuScore, res);
    }

    getAvgRestaurantLogic = (MenuScore, res) => {
        new OperatorRank().getAvgRestaurantOperator(MenuScore, res);
    }
}

module.exports = {
    LogicRank
}