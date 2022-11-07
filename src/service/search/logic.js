const { Operator } = require('./operator');
class Logic {

    searchRestaurantLogic = (search_data, res) => {

        if (!search_data) {
            return
        }
        else {
            new Operator().searchRestaurantOperator(search_data, res);
        }

    }

}
module.exports = {
    Logic
}