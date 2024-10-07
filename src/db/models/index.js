const setupModelsPersona = require('./persona/index.js');
const setupModelsUsuario = require('./usuario/index.js');
const setupModelsRol = require('./rol/index.js');
const setupModelsPrivilegio = require('./privilegio/index.js');
const setupModelsUsuarioRol = require('./usuario_rol/index.js');
const setupModelsRolPrivilegio = require('./rol_privilegio/index.js');
const setupModelsSesion = require('./sesion/index.js');

const setupModelsCliente = require('./cliente/index.js');
const setupModelsCita = require('./cita/index.js');
const setupModelsAccionDiaria = require('./accion_diaria/index.js');
const setupModelsRecurso = require('./recurso/index.js');
const setupModelsProyecto = require('./proyecto/index.js');
const setupModelsReferencias = require('./referencia/index.js');
const setupModelsDocumentacion = require('./documentacion/index.js');
const setupModelsProyectoDocumentacion = require('./proyecto_documentacion/index.js');
const setupModelsLote = require('./lote/index.js');
const setupModelsFavorito = require('./favorito/index.js');
const setupModelsVenta = require('./venta/index.js');
const setupModelsAnuncio = require('./anuncio/index.js');
const setupModelsGasto = require('./gasto/index.js');



// function setupModels(sequelize) {
//     Persona.init(sequelize);
//     Usuario.init(sequelize);
//     Rol.init(sequelize);
//     Privilegio.init(sequelize);
//     UsuarioRol.init(sequelize);
//     RolPrivilegio.init(sequelize);
//     Sesion.init(sequelize);
// }

function setupModels(sequelize) {
    setupModelsPersona(sequelize);
    setupModelsUsuario(sequelize);
    setupModelsRol(sequelize);
    setupModelsPrivilegio(sequelize);
    setupModelsUsuarioRol(sequelize);
    setupModelsRolPrivilegio(sequelize);
    setupModelsSesion(sequelize);

    setupModelsCliente(sequelize);
    setupModelsCita(sequelize);
    setupModelsAccionDiaria(sequelize);
    setupModelsRecurso(sequelize);
    setupModelsProyecto(sequelize);
    setupModelsReferencias(sequelize);
    setupModelsDocumentacion(sequelize);
    setupModelsProyectoDocumentacion(sequelize);
    setupModelsLote(sequelize);
    setupModelsFavorito(sequelize);
    setupModelsVenta(sequelize);
    setupModelsAnuncio(sequelize);
    setupModelsGasto(sequelize);
}

module.exports = setupModels;