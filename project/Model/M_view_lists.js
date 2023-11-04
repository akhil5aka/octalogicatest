// Implimented by Akhil 

const db = require('../util/database')

module.exports={

    // function to get the list of vehicle wheels 
     
    list_of_vehicles:async()=>{
        try{

            var [list]= await db.query(`select id,no_of_wheels 
            from tb_vehicle_wheel_category`)

            return list
        }
        catch(err)
        {
            console.log(err)
        }
    },

    // function to get the vehicles list based on the wheels numer 
    vehicle_list:async(wheel_id)=>{
        try
        {

            var [list]= await db.query(`select id,
            vehicles,
            wheel_id
            from tb_vehicles where wheel_id =?`,wheel_id)

            if(list.length>0)
            {
                return list
            }

            else{

                return 0
            }
        }
        catch(err)
        {
            console.log(err)
        }
    },

    // function to get the vehicle models based on the vehicle tyep selected 

    vehicle_model:async(model_id)=> {
        try
        {

            var vehicle_models = await db.query(` select 
            id,
            model,
            vehicle_id
            from tb_vehicle_models
            where vehicle_id=?`,model_id)

            if(vehicle_models.length>0)
            {
                return vehicle_models
            }
        }
        catch(err)

        {
            console.log(err)
        }
    }
}