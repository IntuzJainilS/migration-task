'use strict';
const { v4: uuidv4 } = require('uuid');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      
    id: uuidv4(), 
    first_name: "alia",
    last_name: "bhatt",
    email: "alia@gmail.com",
    designation: "actor",
    salary: "500",
    department_id: "334cc31b-9c46-416a-a9b2-77ba7084febe",
    createdAt: new Date(),
    updatedAt: new Date(),
      }], {});

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
      await queryInterface.bulkDelete('Employees', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
