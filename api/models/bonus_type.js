"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bonus_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bonus_type.belongsToMany(models.combo, {
        through: "combos_bonus",
      });
    }
  }
  bonus_type.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "bonus_type",
    }
  );
  return bonus_type;
};
