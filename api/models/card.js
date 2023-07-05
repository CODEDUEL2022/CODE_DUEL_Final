"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.belongsToMany(models.Deck, {
        through: "CardDecks",
      });
      Card.belongsToMany(models.Combo, {
        through: "CardCombos",
      });
      Card.belongsToMany(models.Player, {
        through: "Hands",
      });
    }
  }
  Card.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
      type: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      osId: DataTypes.INTEGER,
      filePath: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
