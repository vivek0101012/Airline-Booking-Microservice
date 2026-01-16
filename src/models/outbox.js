'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outbox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Outbox.belongsTo(models.Booking,{
        foreignKey:'booking_id',
         onDelete:'CASCADE'

      })
      // define association here
    }
  }
  Outbox.init({
    booking_id:{
      type:DataTypes.INTEGER,
      allowNull:false,


    } ,
    payload:{ 
      type:DataTypes.JSON,
      allowNull:false,
    },
    status:{ 
      type:DataTypes.ENUM,
      values:["SENT","PENDING","RETRY"],
      defaultValue:"PENDING",
      allowNull:false
    
    }
  }, {
    sequelize,
    modelName: 'Outbox',
  });
  return Outbox;
};