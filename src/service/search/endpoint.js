const { LogicSearch } = require('./logic');
const model = require('./model');

class EndpointSearch {

    constructor() {
        this.filterSearchData = model.filterSearch;
    }
    searchEndpoint = (req, res) => {
        let keyword = req.params.keyword;
        new LogicSearch().searchLogic(keyword, res);
    }

    searchbyReligionEndpoint = (req, res) => {
        let religion = req.params.religion;
        console.log(religion)
        new LogicSearch().searchbyReligionLogic(religion, res);
    }

    searchbyTypeEndpoint = (req, res) => {
        let type= req.params.type;
        new LogicSearch().searchbyTypeLogic(type, res);
    }
    searchbyCanteenEndpoint = (req, res) => {
        let canteen = req.params.canteen;
        new LogicSearch().searchbyCanteenLogic(canteen, res);
    }
    searchbyMenuEndpoint = (req, res) => {
        let menu = req.params.menu;
        new LogicSearch().searchbyMenuLogic(menu, res);
    }

    filterSearchEndpoint = (req, res) => {
            this.filterSearchData.religion_name = req.params.religion_name;
            this.filterSearchData.type_name = req.params.type_name;
            new LogicSearch().filterSearchLogic(this.filterSearchData, res);
    }
    filterSearchByCanteenEndpoint = (req, res) => {
            this.filterSearchData.canteen_name = req.params.canteen_name;
            this.filterSearchData.menu_name = req.params.menu_name;
            new LogicSearch().filterSearchByCanteenLogic(this.filterSearchData, res);
    }
    filterSearchByTypeEndpoint = (req, res) => {
        this.filterSearchData.type_name = req.params.type_name;
        this.filterSearchData.religion_name = req.params.religion_name;
        new LogicSearch().filterSearchByTypeLogic(this.filterSearchData, res);
    }
    filterSearchByTypeCanteenEndpoint = (req, res) => {
        this.filterSearchData.type_name = req.params.type_name;
        this.filterSearchData.canteen_name = req.params.canteen_name;
        new LogicSearch().filterSearchByTypeCanteenLogic(this.filterSearchData, res);
    }
    filterSearchByScoreEndpoint = (req, res) => {
        let score = req.params.score;
        new LogicSearch().filterSearchByScoreLogic(score, res);
    }
    filterSearchByCanteenOnlyEndpoint= (req, res) => {
        let canteen_id = req.params.canteen_id;
        new LogicSearch().filterSearchByCanteenOnlyLogic(canteen_id, res);
    }
    filterSearchByTypeOnlyEndpoint = (req, res) => {
        let type_id = req.params.type_id;
        new LogicSearch().filterSearchByTypeOnlyLogic(type_id, res);
    }
    filterSearchByReligionOnlyEndpoint = (req, res) => {
        let religion_id = req.params.religion_id;
        new LogicSearch().filterSearchByReligionOnlyLogic(religion_id, res);
    }
}
module.exports = {
    EndpointSearch
}