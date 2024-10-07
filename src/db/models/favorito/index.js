const { Favorito } = require('./favorito_models'); // Importamos el modelo

function setupModels(sequelize) {
    Favorito.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
