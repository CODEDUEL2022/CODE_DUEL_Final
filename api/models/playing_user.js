"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class playing_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      playing_user.hasOne(models.user, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      playing_user.belongsTo(models.game, {
        foreignKey: "game_id",
        targetKey: "id",
      });
    }
  }
  playing_user.init(
    {
      skill_point: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "playing_user",
    }
  );
  return playing_user;
};
