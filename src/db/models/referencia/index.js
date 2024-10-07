const { Referencia } = require('./referencia_models'); // Importamos el modelo

function setupModels(sequelize) {
    Referencia.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
