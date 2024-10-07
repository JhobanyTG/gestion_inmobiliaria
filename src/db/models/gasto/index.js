const { Gasto } = require('./gasto_models'); // Importamos el modelo

function setupModels(sequelize) {
    Gasto.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
