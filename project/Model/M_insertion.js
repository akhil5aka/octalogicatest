// Code  Implemented by Akhil 

var db= require('../util/database')

module.exports={


    // function to insert the user data 

    user_data_insertion:async(data_array)=>{

        try{

            var [data_ins]= await db.query(` insert into tb_user_details  set ?`,[data_array])
           

            if(data_ins.affectedRows>0)
            {
               
                return 1
            }
            else
            {

               
                return 0
            }

        }
        catch(err){

            console.log(err)
        }
    },

    // function to check the booking 

    booking_check:async(started_date,model_id)=>{

        try
        {
            var [booking_check_query]= await db.query(`select user_id 
            from tb_user_details 
            where start_date=? and model_id = ?`,[started_date,model_id])

            if(booking_check_query.length>0)
            {
                return 1
            }
            else
            {
                return 0
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

}