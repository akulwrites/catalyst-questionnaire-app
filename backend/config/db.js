const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'myuser', 'mypassword', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;