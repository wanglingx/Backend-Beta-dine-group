const { Logic } = require('./logic');
//const model = require('/src/model/search_model/model');

class Endpoint {

    constructor() {
        
    }
    searchRestaurantEndpoint = (req, res) => {
        let saerch_data = req.body;
        new Logic().searchRestaurantLogic(saerch_data, res);
    }

}
module.exports = {
    Endpoint
}