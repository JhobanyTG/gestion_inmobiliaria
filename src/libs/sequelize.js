const { Sequelize } = require('sequelize');
const config = require('../config');
const setupModels = require('../db/models');

const sequelize = new Sequelize(
    config.postgresql.database,
    config.postgresql.user,
    config.postgresql.password,
    {
        host: config.postgresql.host,
        dialect: 'postgres', // Cambiado a 'postgres'
        logging: false,
    }
);

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Modelo sincronizado correctamente con la base de datos');
    })
    .catch(err => {
        console.error('Error al sincronizar el modelo con la base de datos:', err);
    });

setupModels(sequelize);

module.exports = sequelize;
