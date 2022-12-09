const { LogicScore } = require('./logic');
const model = require('./model');

class EndpointScore{
    constructor() {
        this.User = model.User
        this.Update_score = model.Update_score
    }

    getUserEndpoint = (req, res) => {
        let student_id = req.params.student_id;
        new LogicScore().getUserLogic(student_id,res)
    }

    getscoreEndpoint = (req, res) => {
        this.Update_score.user_id = req.params.user_id;
        this.Update_score.menu_id = req.params.menu_id;
        new LogicScore().getScoreFoodLogic(this.Update_score , res);
    }

    addUserEndpoint = (req, res) => {
        this.User.student_id = req.body.student_id;
        this.User.firstname = req.body.firstname;
        this.User.lastname = req.body.lastname;
        new LogicScore().addUserLogic(this.User, res);
    }

    addScoreEndpoint = (req, res) => {
        this.Update_score.menu_id = req.params.menu_id;
        this.User.student_id = req.body.student_id;
        this.User.firstname = req.body.firstname;
        this.User.lastname = req.body.lastname;
        this.Update_score.score = req.body.score;
        new LogicScore().addScoreLogic(this.User,this.Update_score, res);
    }
    
    addScoreUpdateRankEndpoint = (req, res) => {
        let user_id = req.body.user_id;
        let menu_id = req.body.menu_id;
        let score = req.body.score;
        new LogicScore().addScoreUpdateRankLogic(user_id, menu_id, score,res);
    }
    
}

module.exports = {
    EndpointScore
}