'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    
    static associate(models) {
this.hasMany(models.Outbox,{
  foreignKey:'booking_id'
})

    }
  }
  Booking.init({
    flightID:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    userID: { 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    status: { 
      type:DataTypes.ENUM,
      allowNull:false,
      values:["In Process","Completed","Cancelled","Failed"],
      defaultValue:"In Process"
    },
     totalCost: { 
      type:DataTypes.INTEGER,
      allowNull:false,      
      defaultValue:0
    },
     noOfSeats: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:1
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};