const { LogicRank } = require('./logic');
const model = require('./model');
class EndpointRank {

    constructor() {
        this.MenuScore = model.MenuScore;
    }
    getScorebyMenuEndpoint = (req, res) => {
        let menu_id = req.params.menu_id;
        new LogicRank().getScorebyMenuLogic(menu_id, res);
    }
    addMenuScoreEndpoint = (req, res) => {
        this.MenuScore.menu_id = req.params.menu_id;
        new LogicRank().addMenuScoreLogic(this.MenuScore, res);
    }
    getMenuInfoEndpoint = (req, res) => {
        let menu_id = req.params.menu_id;
        new LogicRank().getMenuInfoLogic(menu_id, res);
    }
    addRestaurantScoreEndpoint = (req, res) => {
        this.MenuScore.menu_id = req.params.menu_id;
        new LogicRank().addRestaurantScoreLogic(this.MenuScore, res);
    }
    getAvgRestaurantEndpoint = (req, res) => {
        this.MenuScore.restaurant_id = req.params.restaurant_id;
        new LogicRank().getAvgRestaurantLogic(this.MenuScore, res);
    } 

    getTop4MenuInfoEndpoint = (req, res) => {
        new LogicRank().getTop4MenuInfoLogic(res);
    }

    getTop4RestaurantInfoEndpoint = (req, res) => {
        new LogicRank().getTop4RestaurantInfoLogic(res);
    }
}
module.exports = {
    EndpointRank
}