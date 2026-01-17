

const { StatusCodes } = require("http-status-codes");
const {Booking}= require("../models/index")

const {AppError,validationError}=require("../utils/errors/index");
const { where } = require("sequelize");
const booking = require("../models/booking");

class BookingRepository {

    async create(data,options={}){

        try{
             const booking= await Booking.create(data,options);
             return booking;

        }catch(error){
            if(error.name =='SequelizeValidationError'){
            //    throw new validationError(error);
            }

            else{
                throw new AppError('RepositoryError',
                                'cannot create booking',
                                'There was some booking issue, please try again later')
            }
        }
    }

    async update(data,id){

        try{
          
             const bookingupdate= await Booking.update(data,{
                where:{id}
             });
           

        }catch(error){
            console.log(error)
            if(error.name =='SequelizeValidationError'){
            //    throw new validationError(error);
            }

            else{
                throw new AppError('RepositoryError',
                                'cannot update booking status',
                                'There was some booking issue, please try again later')
            }
        }
    }


async findById(id) {
  const booking = await Booking.findByPk(id);
  return booking;
}


}
module.exports=BookingRepository







