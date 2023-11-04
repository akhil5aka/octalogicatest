// Code implimented by Akhil
var model = require('../Model/M_view_lists')
module.exports = {

    // code to get the vehicle category based on whells 

    view_wheels_category: async (req, res) => {

        try {
            var vehicle_list = await model.list_of_vehicles()

            res.status(200).json({
                "msg": "success",
                "data": vehicle_list
            })

        }
        catch (err) {
            console.log(err)
        }
    },

    //function to get the vehicles based on the wheels

    vehicle_types:async(req,res)=>{

        try
        {
            var wheel_id= req.body.wheel_id

            var [vehicle_list]= await model.vehicle_list(wheel_id)

            if(vehicle_list!=0)
            {
                res.status(200).json(
                    {
                        "msg":"success",
                        "data":vehicle_list
                    }
                )
            }
            else
            {
                res.status(400).json({
                    "msg":"no vehicles to show"
                })
            }


        }
        catch(err)
        {
            console.log(err)
        }
    },


    // fuction to  get the vehicle models for select vehice type 


    vehicle_model:async(req,res)=>{

        try
        {
            var model_type_id = req.body.model_type_id
            var [vehicle_models] = await model.vehicle_model(model_type_id)

            if(vehicle_models!=0)
            {
                res.status(200).json({
                    "msg":"success",
                    "data":vehicle_models
                })
            }
            else
            {
                res.status(400).json({
    
                    "msg":"no models"
                })
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }
    
}