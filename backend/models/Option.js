const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define("Option", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marks: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        questionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Questions',
                key: 'id'
            }
        }
    });
};