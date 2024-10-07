const { Rol, RolSchema } = require('./rol_models');

function setupModels(sequelize) {
    Rol.init(RolSchema, Rol.config(sequelize));
}

module.exports = setupModels;