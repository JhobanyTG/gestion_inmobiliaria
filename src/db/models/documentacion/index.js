const { Documentacion } = require('./documentacion_models'); // Importamos el modelo

function setupModels(sequelize) {
    Documentacion.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
