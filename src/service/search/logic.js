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
    searchbyCanteenLogic = (canteen_name, res) => {
        new OperatorSearch().searchbyCanteenOperator(canteen_name, res);
    }
    searchbyMenuLogic = (menu_name, res) => {
        new OperatorSearch().searchbyMenuOperator(menu_name, res);
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
    filterSearchByCanteenLogic = async(filterSearchData, res) => {
        console.log(filterSearchData)
        var uri = `http://localhost:3000/searchbyCanteen/${filterSearchData.canteen_name}`;
        var URLEncode = encodeURI(uri); 
        let response = await axios.get(URLEncode)
        filterSearchData.canteen_id = response.data.response[0].canteen_id;

        uri = `http://localhost:3000/searchbyMenu/${filterSearchData.menu_name}`;
        URLEncode = encodeURI(uri); 
        response = await axios.get(URLEncode)
        filterSearchData.menu_id = response.data.response[0].menu_id;

        new OperatorSearch().getRestaurantbyCanteenFilter(filterSearchData, res);
    }
    filterSearchByTypeLogic = async(filterSearchData, res) => {
        console.log(filterSearchData)
        var uri = `http://localhost:3000/searchbyType/${filterSearchData.type_name}`;
        var URLEncode = encodeURI(uri); 
        let response = await axios.get(URLEncode)
        filterSearchData.type_id = response.data.response[0].foodtype_id;
        
        uri = `http://localhost:3000/seachbyReligion/${filterSearchData.religion_name}`;
        URLEncode = encodeURI(uri); 
        response = await axios.get(URLEncode)
        filterSearchData.religion_id = response.data.response[0].religion_id;

        new OperatorSearch().getRestaurantbyTypeFilter(filterSearchData, res);
    }
    filterSearchByTypeCanteenLogic = async(filterSearchData, res) => {
        console.log(filterSearchData)
        var uri = `http://localhost:3000/searchbyType/${filterSearchData.type_name}`;
        var URLEncode = encodeURI(uri); 
        let response = await axios.get(URLEncode)
        filterSearchData.type_id = response.data.response[0].foodtype_id;
        
        uri = `http://localhost:3000/searchbyCanteen/${filterSearchData.canteen_name}`;
        URLEncode = encodeURI(uri); 
        response = await axios.get(URLEncode)
        filterSearchData.canteen_id = response.data.response[0].canteen_id;

        new OperatorSearch().getRestaurantbyTypeCanteenFilter(filterSearchData, res);
    }
    filterSearchByScoreLogic = async(restaurant_score, res) => {
            new OperatorSearch().getRestaurantbyScoreFilter(restaurant_score, res);
    }
    filterSearchByCanteenOnlyLogic = async(canteen_id, res) => {
        new OperatorSearch().getRestaurantbyCanteenOnlyFilter(canteen_id, res);
    }
    filterSearchByTypeOnlyLogic = async(type_id, res) => {
        new OperatorSearch().getRestaurantbyTypeOnlyFilter(type_id, res);
    }
    filterSearchByReligionOnlyLogic = async(religion_id, res) => {
        new OperatorSearch().getRestaurantbyReligionOnlyFilter(religion_id, res);
    }

}
module.exports = {
    LogicSearch
}