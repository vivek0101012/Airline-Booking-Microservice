'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Outboxes','booking_status',{
      type: Sequelize.ENUM( 'IN_PROGRESS', 'COMPLETED', 'CANCELLED','FAILED'),
      defaultValue: 'IN_PROGRESS',
      allowNull: false

    }

    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
