const { ProyectoDocumentacion } = require('./proyecto_documentacion_models'); // Importamos el modelo

function setupModels(sequelize) {
    ProyectoDocumentacion.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
