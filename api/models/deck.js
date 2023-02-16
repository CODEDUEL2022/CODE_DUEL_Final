"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      deck.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      deck.belongsToMany(models.card, {
        through: "card",
      });
    }
  }
  deck.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "deck",
    }
  );
  return deck;
};
