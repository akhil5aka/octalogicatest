// Code Implemented by Akhil 

var model = require('../Model/M_insertion')
module.exports={

    // function to add the user data 

    add_user_data:async(req,res)=>{

        try{

            var first_name=req.body.first_name
            var last_name = req.body.last_name
            var model_id = req.body.model_id
            var start_date = req.body.start_date
            var end_date = req.body.end_date
          
            var booking_check = await model.booking_check(start_date,model_id) //function to cross check the booking
            if(booking_check==0)

            {
            var data_array={
                "first_name":first_name,
                "last_name":last_name,
                "model_id":model_id,
                "start_date":start_date,
                "end_date":end_date
            }

            var insertion = await model.user_data_insertion(data_array)

            if(insertion==1)
            {
                res.status(200).json({
                    "msg":"success"
                    
                })
            }

            else

            {
                res.status(400).json({
                    "msg":"failed"
                })
            }

        }

        else
        {
            res.status(400).json({
                "msg":"car already booked"
            })
        }

        }
        catch(err)
        {
            console.log(err)
        }
    }
}