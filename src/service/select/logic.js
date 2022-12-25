const { OperatorSelect } = require('./operator');
const axios = require('axios');

class LogicSelect {
    getRestuarantLogic = (restaurantID , res) =>{
        console.log("2" + "     " + restaurantID)
        new OperatorSelect().getManuforRestaurant(restaurantID , res)
    }
    getMenuLogic =(menuID , res) =>{
        new OperatorSelect().getManu(menuID , res)
    }
    getReligionLogic = (religionid, res) => {
       new OperatorSelect(). getByReilgion(religionid,res) 
        
    }
    getBestFoodLogic = (res) =>{
        new OperatorSelect(). getBestfood(res)
    }
    getBestRestuarantLogic = (res) =>{
        new OperatorSelect(). getBestRestuarant(res)
    }
    getFoodtypeLogic = (foodtype_id , res) =>{
        new OperatorSelect(). getFoodtype(foodtype_id , res)
    }
    getAllRestaurantsLogic = (res) =>{
        new OperatorSelect() . getAllRestaurants(res)
    }
    getrestaurantforadminLogin = (restaurantid, res) =>{
        new OperatorSelect().getrestaurantforadmin(restaurantid , res)
    }
    getmenuforadminLogin = (menuid, res) =>{
        new OperatorSelect().getmenuforadmin(menuid,res)
    } 
//     gethomeLogic =(res) =>{
//         let response =  axios.get(`http://localhost:3000/BestRestuarantInfo` )
//         // SelectbestRestaurant = response.data.response;
//         // res.status(201).send(response)
//         console.log(response)
//         let response2 = axios.get(`http://localhost:3000/BestFoodInfo`  )
//         res.status(201).send(response2)

//         // let response3 = axios.get(`http://localhost:3000/ReligionInfo/religionid=RE01`  )
//         // selectReilgion.religion_id = response3.data.response[0].religion_id
//         // selectReilgion = response3.data.response;
        

//     }
}
module.exports = {
    LogicSelect
}