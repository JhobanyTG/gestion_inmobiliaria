const { Venta } = require('./venta_models'); // Importamos el modelo

function setupModels(sequelize) {
    Venta.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
