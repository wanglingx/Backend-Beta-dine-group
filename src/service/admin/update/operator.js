const connection = require('../../../../database/connection');
class OperationUpd {

    checkcanteen =(canteenname , res)=>{
        canteenname = "%"+canteenname+"%";
        let sql = `select canteen.canteen_id from canteen 
        where canteen_name like ?;`
        connection.query(sql, [canteenname],
            function (err, data){
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: data})
                }

            })
    }

    checkreligion = (religionname , res)=>{
        religionname = "%"+religionname+"%";
        let sql = `select religion_id from religion
        where religion_name like ?;`
        connection.query(sql, [religionname],
            function (err, data){
                console.log(religionname)
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: data})
                }

            })
    }

    checkfoodtype = (foodtypename , res)=>{
        foodtypename = "%"+foodtypename+"%";
        let sql = `select foodtype_id from foodtype
        where foodtype_name like ?;`
        connection.query(sql, [foodtypename],
            function (err, data){
                console.log(foodtypename)
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: data})
                }

            })
    }

updateRestaurant = (resInfo ,res) =>{
    let sql =`UPDATE restaurant
    SET restaurant_name = ? ,
    restaurant_time = ? ,
    phone_number = ? ,
    restaurant_picture = ? ,
    canteen_id = ? ,
    religion_id = ?,
    foodtype_id =?,
    restaurant_timestamp = CURRENT_TIMESTAMP()
    WHERE restaurant_id = ? ;`
    connection.query(sql, [
        resInfo.restaurant_name,
        resInfo.restaurant_time,
        resInfo.phone_number,
        resInfo.restaurant_picture,
        resInfo.canteen_id,
        resInfo.religion_id,
        resInfo.foodtype_id,
        resInfo.restaurant_id
    ],
        function (err, data){
            if(err)
                console.log(err)
            else{
                console.log(data)
                return res.status(201).send({response: 'update restaurant finish'})
            }

        })
}

updateMenu =(menuInfo , res) =>{
    console.log(menuInfo)
    let sql =`UPDATE menu 
    SET menu_name = ? ,
        price =?,
        detail =?,
        menu_picture =?,
        menu_timestamp = CURRENT_TIMESTAMP()
    WHERE menu_id =?;`
        connection.query(sql, [
            menuInfo.menu_name,
            menuInfo.price,
            menuInfo.details,
            menuInfo.menu_picture,
            menuInfo.menu_id
        ],
            function (err, data){
                if(err)
                    console.log(err)
                else{
                    console.log(data)
                    return res.status(201).send({response: 'update menu finish'})
                }
    
            })
    }
}
module.exports = {
    OperationUpd
}