'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    //  Add Column
    await queryInterface.addColumn('Employees', 'manager_id', {
      type: Sequelize.UUID,
      allowNull: true,
      after: 'department_id', 
    });

    //  Add Foreign Key Constraint
    await queryInterface.addConstraint('Employees', {
      fields: ['manager_id'],
      type: 'foreign key',
      name: 'fk_employees_manager',
      references: {
        table: 'Employees',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {

    // Remove FK first
    await queryInterface.removeConstraint(
      'Employees',
      'fk_employees_manager'
    );

    // Then remove column
    await queryInterface.removeColumn('Employees', 'manager_id');
  }
};