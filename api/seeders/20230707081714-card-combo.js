"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const now = new Date();
    return queryInterface.bulkInsert("CardCombos", [
      {
        ComboId: 1,
        CardId: 24,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 1,
        CardId: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 2,
        CardId: 25,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 2,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 3,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 3,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 4,
        CardId: 11,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 4,
        CardId: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 5,
        CardId: 37,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 5,
        CardId: 53,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 6,
        CardId: 53,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 6,
        CardId: 12,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 7,
        CardId: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 7,
        CardId: 24,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 7,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 8,
        CardId: 42,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 8,
        CardId: 45,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 8,
        CardId: 46,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 9,
        CardId: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 9,
        CardId: 41,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 9,
        CardId: 38,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 10,
        CardId: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 10,
        CardId: 49,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 11,
        CardId: 41,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 11,
        CardId: 12,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 12,
        CardId: 41,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 12,
        CardId: 18,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 13,
        CardId: 41,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 13,
        CardId: 17,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 14,
        CardId: 1,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 14,
        CardId: 46,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 15,
        CardId: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 15,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 16,
        CardId: 2,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 16,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 17,
        CardId: 6,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 17,
        CardId: 3,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 18,
        CardId: 4,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 18,
        CardId: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 19,
        CardId: 8,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 19,
        CardId: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 20,
        CardId: 13,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 20,
        CardId: 22,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 21,
        CardId: 14,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 21,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 22,
        CardId: 14,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 22,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 23,
        CardId: 16,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 23,
        CardId: 35,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 24,
        CardId: 19,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 24,
        CardId: 11,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 25,
        CardId: 21,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 25,
        CardId: 44,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 26,
        CardId: 29,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 26,
        CardId: 30,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 27,
        CardId: 31,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 27,
        CardId: 40,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 28,
        CardId: 45,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 28,
        CardId: 43,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 29,
        CardId: 44,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 29,
        CardId: 34,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 30,
        CardId: 47,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 30,
        CardId: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 31,
        CardId: 25,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 31,
        CardId: 50,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 32,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 32,
        CardId: 52,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 33,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 33,
        CardId: 52,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 34,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 34,
        CardId: 27,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 35,
        CardId: 32,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 35,
        CardId: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 36,
        CardId: 36,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 36,
        CardId: 59,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 37,
        CardId: 35,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 37,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 38,
        CardId: 35,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 38,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 39,
        CardId: 53,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 39,
        CardId: 54,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 40,
        CardId: 55,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 40,
        CardId: 10,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 41,
        CardId: 56,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 41,
        CardId: 46,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 42,
        CardId: 57,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 42,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 43,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 43,
        CardId: 57,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 44,
        CardId: 59,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 44,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 45,
        CardId: 59,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 45,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 46,
        CardId: 44,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 46,
        CardId: 26,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 47,
        CardId: 44,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 47,
        CardId: 58,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 48,
        CardId: 60,
        createdAt: now,
        updatedAt: now,
      },
      {
        ComboId: 48,
        CardId: 59,
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
