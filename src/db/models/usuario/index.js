const { Usuario, UsuarioSchema } = require('./usuario_models');

function setupModels(sequelize) {
    Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = setupModels;