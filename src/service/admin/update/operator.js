
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
}
module.exports = {
    OperationUpd
}