const { AccionDiaria } = require('./accion_diaria_models'); // Importamos el modelo

function setupModels(sequelize) {
    AccionDiaria.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
