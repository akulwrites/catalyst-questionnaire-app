const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Section", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};