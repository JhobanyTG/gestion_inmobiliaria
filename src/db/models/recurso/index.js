const { Recurso } = require('./recurso_models'); // Importamos el modelo

function setupModels(sequelize) {
    Recurso.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
