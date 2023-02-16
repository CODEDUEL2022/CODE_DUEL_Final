/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable("cards_decks", {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      card_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      deck_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable("cards_decks");
  },
};
