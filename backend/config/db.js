const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('mydb', 'myuser', 'mypassword', {
//     host: 'localhost',
//     dialect: 'postgres',
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});  

module.exports = sequelize;