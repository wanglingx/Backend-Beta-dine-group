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

    getrestaurantforadmin =(restaurantID , res )=>{
        let sql = `select  r.restaurant_id ,r.restaurant_name ,r.restaurant_time ,r.phone_number ,r.restaurant_picture , c.canteen_name , re.religion_name , f.foodtype_name  from restaurant as r
        inner join  canteen as c  on r.canteen_id = c.canteen_id
        inner join  religion as re on r.religion_id  = re.religion_id 
        inner join  foodtype as f  on r.foodtype_id  = f.foodtype_id 
        where restaurant_id = ?  ;`
        connection.query(sql , [restaurantID] ,
            function(err , data){
                if(err) console.log(err)
                else {
                    console.log(data)
                    return res.status(201).send({response: data})
                }
            })
    }
    getmenuforadmin =(menuID , res )=>{
        let sql = `select menu_id , menu_name , price ,detail , menu_picture from menu 
        where menu_id = ? ;`
        connection.query(sql , [menuID] ,
            function(err , data) {
                if(err) console.log(err)
                else {
                    console.log(data)
                    return res.status(201).send({response:data})
                }
            }
            )
    }
    getrestaurantscore =(score ,res)=>{
        let sql = `SELECT r.restaurant_id ,r.restaurant_name ,r.restaurant_time ,r.phone_number ,r.restaurant_score 
        ,r.restaurant_picture ,c.canteen_name ,re.religion_name ,f.foodtype_name 
        FROM restaurant as r
        inner join canteen as c on r.canteen_id  = c.canteen_id
        inner join religion as re on r.religion_id = re.religion_id 
        inner join foodtype as f on r.foodtype_id  = f.foodtype_id 
        WHERE restaurant_score >= ?;`
        connection.query(sql , [score] ,
            function(err , data) {
                if(err) console.log(err)
                else {
                    console.log(data)
                    return res.status(201).send({response:data})
                }
            }
        )
    }
}

module.exports = {
    OperatorSelect
}