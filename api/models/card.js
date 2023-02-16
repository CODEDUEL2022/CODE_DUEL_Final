"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      card.belongsTo(models.os, {
        foreignKey: "enforce_os_id",
        targetKey: "id",
      });
      card.belongsToMany(models.deck, {
        through: "cards_decks",
      });
      card.belongsToMany(models.combo, {
        through: "cards_combos",
      });
      card.belongsToMany(models.action_type, {
        through: "cards_action_types",
      });
    }
  }
  card.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      file_path: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "card",
    }
  );
  return card;
};
