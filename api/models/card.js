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
        constraints: false,
      });
      Card.belongsToMany(models.Deck, {
        through: "CardDecks",
        constraints: false,
      });
      Card.belongsToMany(models.Combo, {
        through: "CardCombos",
        constraints: false,
      });
      Card.belongsToMany(models.Player, {
        through: "Hands",
        constraints: false,
      });
    }
  }
  Card.init(
    {
      name: DataTypes.STRING,
      value: DataTypes.INTEGER,
      type: DataTypes.STRING,
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
