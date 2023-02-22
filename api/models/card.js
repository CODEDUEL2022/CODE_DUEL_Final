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
      Card.belongsTo(models.Os, {
        foreignKey: "OsId",
        targetKey: "id",
      });
      Card.belongsToMany(models.Deck, {
        through: "CardDecks",
      });
      Card.belongsToMany(models.Combo, {
        through: "CardCombos",
      });
      Card.belongsToMany(models.Type, {
        through: "CardsTypes",
      });
      Card.belongsToMany(models.Player, {
        through: "Hands",
      });
    }
  }
  Card.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      file_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
