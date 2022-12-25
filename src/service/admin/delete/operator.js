const connection = require('../../../../database/connection');
class OperationDel {
    //restaurant
    deletrestaurant = (restaurantid , res) => {
        let sql = `DELETE FROM  menu WHERE restaurant_id = ?;`
        let sql2 = `DELETE FROM  restaurant WHERE restaurant_id = ?;`
        connection.query (sql , [restaurantid] , 
            function (err){
            if(err)
                console.log(err)
            else{
                connection.query (sql2 , [restaurantid] ,
                function (err) {
                    if(err) console.log(err)
                    else{
                        return res.status(201).send({response:"delete restaurant finish"})
                    }
                }
                )
            }

        })
    }

    //menu
    deletemenu = (menuid , res) => {
        let sql = `DELETE FROM menu WHERE menu_id = ? ;`
        connection.query (sql , [menuid] , 
            function(err){
                if(err) console.log(err)
                else{
                    return res.status(201).send({response : "delete menu finish"})
                }
            })
    }



}
module.exports = {
    OperationDel
}