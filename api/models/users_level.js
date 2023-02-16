"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users_level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users_level.belongsTo(models.user, {
        foreignKey: "user_id",
        targetKey: "id",
      });
    }
  }
  users_level.init(
    {
      exp: DataTypes.INTEGER,
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "users_level",
    }
  );
  return users_level;
};
