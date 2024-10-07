const { Lote } = require('./lote_models'); // Importamos el modelo

function setupModels(sequelize) {
    Lote.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
