"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Combo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Combo.belongsToMany(models.Card, {
        through: models.CardCombo,
      });
      Combo.belongsToMany(models.Bonus, {
        through: "ComboBonus",
      });
    }
  }
  Combo.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Combo",
    }
  );
  return Combo;
};
