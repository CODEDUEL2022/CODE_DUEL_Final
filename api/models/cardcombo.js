"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CardCombo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  CardCombo.init(
    {
      CardId: DataTypes.INTEGER,
      ComboId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CardCombo",
    }
  );
  return CardCombo;
};
