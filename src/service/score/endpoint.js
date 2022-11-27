const { LogicScore } = require('./logic');
const model = require('./model');
 
class EndpointScore{

    constructor() {
        this.scoreRes = model.pointRes
        this.scoreFood = model.pointFood
    }

    // //getScoreRestuarant
    // getScoreRestuarantEndpoint = (req, res) => {
    //     new LogicScore().getScoreRestuarantLogic(res_id, res);
    // }

    // //Restaurant Score
    // addScoreResruarantEndpoint = (req, res) => {
    //     this.scoreRes.res_id = req.params.res_id;
    //     this.scoreRes.res_point = req.body.res_point;
    //     new LogicScore().addScoreResruarantLogic(this.scoreRes, res);
    // }

    //get Score Food
    getScoreFoodEndpoint = (req, res) => {
        new LogicScore().getScoreFoodLogic(menu_id, res);
    }

    showFoodScoreEndpoint = (req, res) => {
        new LogicScore().showFoodScoreLogic(res);
    }

    //Food Score
    addScoreFoodEndpoint = (req, res) => {
        this.scoreFood.menu_id = req.params.menu_id;
        this.scoreFood.point_food = req.body.point_food;
        new LogicScore().addScoreFoodLogic(this.scoreFood, res);
    }

    //get menu page
    getMenuInfoEndpoint = (req, res) => {
        this.scoreFood.menu_id = req.params.menu_id;
        new LogicScore().getMenuInfo
    }

}

module.exports = {
    EndpointScore
}