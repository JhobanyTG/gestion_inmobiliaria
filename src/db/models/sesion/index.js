const { Sesion, SesionSchema } = require('./sesion_models');

function setupModels(sequelize) {
    Sesion.init(SesionSchema, Sesion.config(sequelize));
}

module.exports = setupModels;