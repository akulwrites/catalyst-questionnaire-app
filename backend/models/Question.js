const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Question", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        section: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subsection: {
            type: DataTypes.STRING,
            allowNull: false
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isMulti: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
};