const { RolPrivilegio, RolPrivilegioSchema } = require('./rol_privilegio_models');

function setupModels(sequelize) {
    RolPrivilegio.init(RolPrivilegioSchema, RolPrivilegio.config(sequelize));
}

module.exports = setupModels;