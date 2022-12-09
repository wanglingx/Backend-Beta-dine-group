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
        console.log(filterSearchData)
        var uri = `http://localhost:3000/searchbyType/${filterSearchData.type_name}`;
        var URLEncode = encodeURI(uri); 
        let response = await axios.get(URLEncode)
        filterSearchData.type_id = response.data.response[0].foodtype_id;

        uri = `http://localhost:3000/seachbyReligion/${filterSearchData.religion_name}`;
        URLEncode = encodeURI(uri); 
        response = await axios.get(URLEncode)
        filterSearchData.religion_id = response.data.response[0].religion_id;

        new OperatorSearch().getRestaurantbyFilter(filterSearchData, res);
    }

}
module.exports = {
    LogicSearch
}