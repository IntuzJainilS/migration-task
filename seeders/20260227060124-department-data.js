'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Departments', [{
      id: '59526307-0f54-41c1-9da1-2f107b1c3953',
      name: 'hr',
      description: "this is the random description of hr",
      location: "ahmedabad",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'ffb8b531-3fcf-4935-a428-4b5b0cad8103',
      name: 'engineering',
      description: "this is the random description of engineering",
      location: "ahmedabad",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '77d54d4e-53d5-4792-85b2-10ec383802e0',
      name: 'finance',
      description: "this is the random description of finance",
      location: "ahmedabad",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'dfec63f3-b196-4d6d-9bb6-d23b6b603a1e',
      name: 'operations',
      description: "this is the random description of operations",
      location: "ahmedabad",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ]
    )
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
