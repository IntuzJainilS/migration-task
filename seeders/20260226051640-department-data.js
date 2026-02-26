'use strict';
const {v4: uuidv4} = require('uuid')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      {
        // id: '001',
        name: 'collector',
        description: 'test-description . data is inserting or not',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: '002',
        name: 'hod',
        description: 'test-description . data is inserting or not',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: '003',
        name: 'PI',
        description: 'test-description . data is inserting or not',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Departments', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
