const { Proyecto } = require('./proyecto_models'); // Importamos el modelo

function setupModels(sequelize) {
    Proyecto.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
