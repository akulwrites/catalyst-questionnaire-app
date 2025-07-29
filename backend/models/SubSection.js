const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Subsection = sequelize.define("Subsection", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sectionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Sections",
                key: "id",
            },
            onDelete: "CASCADE", // Optional: cascade delete
        },
    });

    return Subsection;
};