'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [
      {
        // id: '001',
        name: 'Developer',
        description: 'test-description . developer data is inserting or not',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        // id: '001',
        name: 'TL',
        description: 'test-description . TL data is inserting or not',
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
