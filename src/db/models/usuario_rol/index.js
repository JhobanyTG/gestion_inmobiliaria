const { UsuarioRol, UsuarioRolSchema } = require('./usuario_rol_models');

function setupModels(sequelize) {
    UsuarioRol.init(UsuarioRolSchema, UsuarioRol.config(sequelize));
}

module.exports = setupModels;