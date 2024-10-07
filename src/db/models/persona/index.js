const { Persona } = require('./persona_models'); // Importamos el modelo

function setupModels(sequelize) {
    Persona.init(sequelize); // Inicializamos el modelo
}

module.exports = setupModels;
