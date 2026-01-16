const axios=require('axios')

const {BookingRepository}=require('../repository/index')
const {FLIGHT_SERVICE_URL} =require('../config/server.Config');
const { ServiceError } = require('../utils/errors');
const { error } = require('winston');

class BookingService{

    constructor(){

        this.BookingRepository=new BookingRepository();

    }


    async CreateBooking(data){
     
        try {
            const flightId=data.flightID;
            const getFlightRequestUrl= `${FLIGHT_SERVICE_URL}/api/v1/flights/${flightId}`
            const response=await axios.get(getFlightRequestUrl);
            const flightData= response.data.data
            const priceOfFlight=flightData.price
            if(data.seats>response.data.data.totalSeats){
                throw new ServiceError('something went wrong in the booking process','Insufficient seats')
            }
            const totalCost= priceOfFlight*data.seats
            
            const bookingPayload= {...data,totalCost}            
            const booking=await this.BookingRepository.create(bookingPayload); 
            const updateFlightRequestUrl= `${FLIGHT_SERVICE_URL}/api/v1/flights/${flightId}`
            await axios.patch(updateFlightRequestUrl,{totalSeats:flightData.totalSeats-data.seats})


        
            await this.BookingRepository.update({status:"Completed"},booking.id)
                 const bookingdata= await this.BookingRepository.findById(booking.id)

                 
                  return bookingdata;
                    
        
           

      
            
        } catch (error) {
           
                    if (error instanceof ServiceError) {
                                 

            throw error;
        }

            if(error.name=='RepositoryError'|| error.name=='validationError'){
                         throw error;
            }
            throw new ServiceError()

          
           
            
        }

    }

    async CancellBooking (data) {

        try {
              const id=Number(data)
         
              const booking= await this.BookingRepository.findById(id);
              console.log(booking)
              if(booking){
                            if(booking.status=="Cancelled"){
                                return booking;
                            }
                            const flightId=booking.flightID
                            const updateFlightRequestUrl= `${FLIGHT_SERVICE_URL}/api/v1/flight/${flightId}`

                            await axios.patch(updateFlightRequestUrl,{totalSeats:booking.noOfSeats})
                            await this.BookingRepository.update({status:"Cancelled"},booking.id)
                            const bookingdata= await this.BookingRepository.findById(booking.id)
                            return bookingdata;

              }
              else{
                throw new ServiceError("No such booking exist")
              }
                        
        } catch (error) {

            if ( error instanceof ServiceError ){
                throw error;
            }
            
            if(error.name=='RepositoryError'|| error.name=='validationError'){
                         throw error;
            }
            throw new ServiceError()

          
            
        }

    }

}

module.exports=BookingService;