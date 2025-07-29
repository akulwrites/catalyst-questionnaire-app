const app = require('./app');
const { sequelize} = require('./models');

sequelize.sync({ alter: true }).then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
});