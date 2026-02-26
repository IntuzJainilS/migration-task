'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint("Employees", {
      fields: ["department_id"],
      type: "foreign key",
      name: "fk_employees_department",
      references: {
        table: "Departments",
        field: "id", 
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "employees",
      "fk_employees_department"
    );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
