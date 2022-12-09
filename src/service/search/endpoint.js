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
        new LogicSearch().searchbyReligionLogic(religion, res);
    }

    searchbyTypeEndpoint = (req, res) => {
        let type= req.params.type;
        new LogicSearch().searchbyTypeLogic(type, res);
    }

    filterSearchEndpoint = (req, res) => {
            this.filterSearchData.religion_name = req.params.religion_name;
            this.filterSearchData.type_name = req.params.type_name;
            new LogicSearch().filterSearchLogic(this.filterSearchData, res);
    }
}
module.exports = {
    EndpointSearch
}