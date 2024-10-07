const { Anuncio } = require('./anuncio_models'); // Importamos el modelo

function setupModels(sequelize) {
    Anuncio.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
