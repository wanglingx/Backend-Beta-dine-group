const { OperatorSearch } = require('./operator');
const axios = require('axios');
class LogicSearch {

    searchLogic = (search_data, res) => {
        if (!search_data) {
            return
        }
        else {
            new OperatorSearch().searchOperator(search_data, res);
        }
    }
    searchbyReligionLogic = (religion_name, res) => {
        new OperatorSearch().searchbyReligionOperator(religion_name, res);
    }

    searchbyTypeLogic = (type_name, res) => {
        new OperatorSearch().searchbyTypeOperator(type_name, res);
    }

    filterSearchLogic = async(filterSearchData, res) => {
        if (filterSearchData.type_name) {
            let response = await axios.get(`http://localhost/searchbyType/${filterSearchData.type_name}`)
            filterSearchData.type_id = response.data.response[0].type_id;
        }
        if (filterSearchData.religion_name) {
            let response = await axios.get(`http://localhost/searchbyType/${filterSearchData.religion_name}`)
            filterSearchData.religion_id = response.data.response[0].religion_id;
        }

        new OperatorSearch().getRestaurantbyFilter(filterSearchData, res);
    }

}
module.exports = {
    LogicSearch
}