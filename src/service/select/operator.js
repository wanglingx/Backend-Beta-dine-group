const connection = require('../../../database/connection');
class OperatorSelect {
    getManuforRestaurant = (restaurantID , res) =>{
        console.log("3" + "     " + restaurantID)
        let sql =`SELECT menu_id , menu_name , price , detail , score , menu_picture ,restaurant_id FROM Menu 
            WHERE restaurant_id = ?`
            connection.query(sql, [restaurantID],
                function (err, data){
                    if(err)
                        console.log(err)
                    else{
                        console.log(data)
                        return res.status(201).send({response: data})
                    }

                })
    }

    getManu = (menuID,res)=>{
        let sql =`SELECT  menu_name , price , detail , score , menu_picture FROM Menu 
            WHERE menu_id = ?`
            connection.query(sql, [menuID],
                function (err, data){
                    if(err)
                        console.log(err)
                    else{
                        console.log(data)
                        return res.status(201).send({response: data})
                    }

                })
    }
    
    getByReilgion = (religionid , res) =>{
        let sql =`SELECT  restaurant_id , restaurant_name ,restaurant_time , phone_number ,restaurant_score ,restaurant_picture FROM Restaurant
            WHERE religion_id = ?`
            connection.query(sql, [religionid],
                function (err, data){
                    if(err)
                        console.log(err)
                    else{
                        console.log(data)
                        return res.status(201).send({response: data})
                    }

                })
    }
    getBestfood = (res) =>{
        let sql =`SELECT  menu_id , menu_name , price , detail , score , menu_picture , restaurant_id FROM Menu
            WHERE score >= 4.0 ORDER BY score DESC `
            connection.query(sql,[],
                function (err, data){
                    if(err)
                        console.log(err)
                    else{
                        console.log(data)
                        return res.status(201).send({response: data})
                    }

                })
    }
    getBestRestuarant = (res) =>{
        let sql =`SELECT restaurant_id , restaurant_name , restaurant_time , phone_number , restaurant_score , restaurant_picture , canteen_id , religion_id , foodtype_id FROM Restaurant
            WHERE restaurant_score >= 4.0 ORDER BY restaurant_score DESC `
            connection.query(sql,[],
                function (err, data){
                    if(err)
                        console.log(err)
                    else{
                        console.log(data)
                        return res.status(201).send({response: data})
                    }
                })
    }
    
    getFoodtype =(foodtype_id , res)=>{
        let sql =`SELECT restaurant_id , restaurant_name , restaurant_time , phone_number , restaurant_score , restaurant_picture , canteen_id , religion_id 
                    FROM Restaurant
                    WHERE foodtype_id = ?`
         connection.query(sql,[foodtype_id],
            function (err, data){
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: data})
                    }
            })
    }

    getAllRestaurants = (res)=>{
        let sql =`SELECT restaurant_id,restaurant_name , restaurant_time , phone_number , restaurant_picture  FROM restaurant`
        connection.query(sql,[],
            function (err, data){
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: data})
                }
            })
    }
}

module.exports = {
    OperatorSelect
}