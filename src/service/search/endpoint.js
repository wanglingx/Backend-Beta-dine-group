const { LogicSearch } = require('./logic');
const model = require('./model');

class EndpointSearch {

    constructor() {
        this.filterSearchData = model.filterSearch;
    }
    searchEndpoint = (req, res) => {
        let saerch_data = req.query.saerch_data;
        new LogicSearch().searchLogic(saerch_data, res);
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

    filterSearchEndpoint = (req, res) => {
        if (req.query.religion_name) {
            this.filterSearchData.religion_name = req.query.religion_name;
        }
        else {
            this.filterSearchData.type_name = req.query.type_name;
        }
        new LogicSearch().filterSearchLogic(this.filterSearchData, res);
    }
}
module.exports = {
    EndpointSearch
}