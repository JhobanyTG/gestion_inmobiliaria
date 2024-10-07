const { Cliente } = require('./cliente_models'); // Importamos el modelo

function setupModels(sequelize) {
    Cliente.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
