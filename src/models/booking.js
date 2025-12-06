'use strict';
const {
  Model
} = require('sequelize');
const { all } = require('../routes/v1');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookign.init({
    flightID:{ 
      type:DataTypes.INTEGER,
      allownull:false
    },
    userID: { 
      type:DataTypes.INTEGER,
      allownull:false
    },
    status: { 
      type:DataTypes.ENUM,
      allownull:false,
      values:["In Process","Booked","Cancelled"],
      defaultvalue:"In Process"
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};