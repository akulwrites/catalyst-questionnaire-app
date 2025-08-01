const app = require('./app');
const { sequelize} = require('./models');

sequelize.sync({ alter: true }).then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`Server running on port ${process.env.PORT || 3001}`);
    });
});