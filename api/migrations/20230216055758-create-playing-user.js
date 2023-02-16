"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("playing_users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
            key: "id",
          },
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "games",
            key: "id",
          },
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      skill_point: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("playing_users");
  },
};
