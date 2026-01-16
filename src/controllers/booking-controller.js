const {BookingService}=require('../services/index')
const { StatusCodes}=require('http-status-codes');
const { AppError } = require('../utils/errors');
const bookingService = new BookingService();


const create =async(req,res)=>{
    
       try {
            
        const response =await bookingService.CreateBooking(req.body);
        return res.status(StatusCodes.OK).json({
         data:response,
         success:true,
         message:"successfully completed the booking ",
         err:{}

        })

       } catch (error) {
        console.log(error)
         return res.status(500).json({

         data:{},
         success:false,
         message:"failed to complete the booking",
         err:error

        })
       }
       
}
const update =async(req,res)=>{
    
       try {
            
        const response =await bookingService.CancellBooking(req.params.id);
        return res.status(StatusCodes.OK).json({
         data:response,
         success:true,
         message:"successfully cancelled the booking ",
         err:{}

        })

       } catch (error) {
        console.log(error)
         return res.status(500).json({

         data:{},
         success:false,
         message:"failed to cancell the booking",
         err:error

        })
       }
       
}
module.exports={

    create,
    update

}