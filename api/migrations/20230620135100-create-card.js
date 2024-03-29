"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
      },
      cost: {
        type: Sequelize.INTEGER,
      },
      osId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: {
        //     tableName: "Os",
        //     key: "id",
        //   },
        // },
      },
      filePath: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
