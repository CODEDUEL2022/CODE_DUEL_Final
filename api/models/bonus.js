"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bonus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bonus.belongsToMany(models.Combo, {
        through: "ComboBonus",
      });
    }
  }
  Bonus.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bonus",
    }
  );
  return Bonus;
};
