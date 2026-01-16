'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Outboxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      booking_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:"Bookings",
          key:"id"

        },
        onDelete:"CASCADE"
      },
      payload: {
        allowNull:false,
        type: Sequelize.JSON
      },
      status: {

        type: Sequelize.ENUM('SENT','PENDING','RETRY'),
        allowNull:false,
        defaultValue:'PENDING'

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Outboxes');
  }
};