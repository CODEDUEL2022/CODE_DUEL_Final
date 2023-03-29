"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Deck.belongsTo(models.User, {
        foreignKey: "UserId",
        targetKey: "id",
        constraints: false,
      });
      Deck.belongsToMany(models.Card, {
        through: "CardDecks",
        constraints: false,
      });
    }
  }
  Deck.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};
