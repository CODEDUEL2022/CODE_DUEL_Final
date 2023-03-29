"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsTo(models.User, {
        foreignKey: "UserId",
        targetKey: "id",
        constraints: false,
      });
      Player.belongsTo(models.Game, {
        foreignKey: "GameId",
        targetKey: "id",
        constraints: false,
      });
      Player.belongsToMany(models.Card, {
        through: "Hands",
        constraints: false,
      });
      Player.belongsToMany(models.State, {
        through: "PlayerStates",
        constraints: false,
      });
    }
  }
  Player.init(
    {
      skill_point: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
