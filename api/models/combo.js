"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class combo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      combo.belongsToMany(models.card, {
        through: "cards_combos",
      });
      combo.belongsToMany(models.bonus_type, {
        through: "combos_bonus",
      });
    }
  }
  combo.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "combo",
    }
  );
  return combo;
};
