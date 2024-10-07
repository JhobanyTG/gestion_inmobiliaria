const { Cita } = require('./cita_models'); // Importamos el modelo

function setupModels(sequelize) {
    Cita.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
