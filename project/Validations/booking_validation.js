// Code Implimented by Akhil 
// validation body

const yup =require('yup')

const bookingvalidate=yup.object({

    first_name:yup.string().required(),
    last_name:yup.string().required(),
    model_id:yup.number().required(),
    start_date:yup.date().required(),
    end_date:yup.date().required()
});

module.exports = bookingvalidate;