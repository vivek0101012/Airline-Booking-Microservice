const { where } = require("sequelize");
const {Outbox}= require("../models/index")


class OutboxRepository {

    async create(data,options={}){

        try {
        
            const response= await  Outbox.create(data,options)
             return response;
            
        } catch (error) {

                throw error
        }

    }

    async update (data,id){
        await Outbox.update(data,{
            where:{id}
        })
    }



}

module.exports= OutboxRepository