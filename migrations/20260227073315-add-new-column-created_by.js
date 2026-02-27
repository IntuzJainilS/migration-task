'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Employees', 'created_by',
      {
        type: Sequelize.STRING,
        after: "manager_id",
      });

    await queryInterface.addColumn('Employees', 'updated_by', {
      type: Sequelize.STRING,
      after: "created_by", // Placing it right after created_by
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Employees', 'created_by');
    await queryInterface.removeColumn('Employees', 'created_by');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
