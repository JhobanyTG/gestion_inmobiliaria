const { Privilegio, PrivilegioSchema } = require('./privilegio_models');

function setupModels(sequelize) {
    Privilegio.init(PrivilegioSchema, Privilegio.config(sequelize));
}

module.exports = setupModels;