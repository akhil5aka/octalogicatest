// Code implemented by Akhil 

// middleware to test the backend validation on insertion

const validation=(schema)=>async(req,res,next)=>{

    const body = req.body 

    try{
        
        await schema.validate(body)
        next();
     
    }
    catch(err)
    {
        console.log(err)
        return res.status(400).json({err})
    }
}


module.exports = validation